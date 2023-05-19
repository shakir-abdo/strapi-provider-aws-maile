module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    const ses = require("node-ses");
    const client = ses.createClient(providerOptions);
    console.log(providerOptions);
    return {
      send: async (options) => {
        options.message = options.text;

            return await new Promise((resolve, reject) => {
                let payload = Object.assign(settings,
                  {
                    from: settings.defaultFrom,
                    replyTo: settings.defaultReplyTo,
                  });
          client.sendEmail(
            { ...payload, ...options },
            function (err, data, res) {
              if (data) {
                return resolve(data);
              }
              if (err) {
                return reject(err);
              }
            }
          );
        });
      },
    };
  },
};
