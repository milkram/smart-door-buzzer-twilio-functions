/**
*  Simple call box routine
*
*  This function is meant for the apartment building callbox
*  It gives the user a couple of seconds to produce the password
* 	Then dials all the residents to grant manual entry
*/

exports.handler = function(context, event, callback) {
  const OPTIONS = {
    action: '/door-open',
    hints: context.PASSPHRASE,
    input: 'speech dtmf',
    numDigits: '4',
    speechTimeout: 'auto',
    timeout: 4,
  };
  const GENDER_VOICE = { voice: 'woman '};
  const PHRASE = 'Please wait';

  const twiml = new Twilio.twiml.VoiceResponse();
  twiml.gather(OPTIONS).say(GENDER_VOICE, PHRASE); // gather speech+digit entry from user
  twiml.redirect('/call-residents')
  callback(null, twiml)
}
