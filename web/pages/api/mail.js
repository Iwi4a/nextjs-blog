
export default async function(req, res) {
    const { name, email, message }  = req.body;

    if (!email) {
        throw new Error('Missing Email');
    }

    var formData = JSON.stringify({
        "from": {
            "email": process.env.EMAIL_DOMAIN,
            "name": name
        },
        "subject": "A message from Ivelin.me",
        "content": [
            {
                "type": "html",
                "value": `Sender name: ${name}<br />Sender email: ${email}<br />${message}`
            }
        ],
        "personalizations": [
            {
                "to": [
                {
                    "email": process.env.ADMIN_EMAIL,
                    "name": process.env.ADMIN_NAME
                    }
                ]
            }
        ]
    });
    try {
        const sendEmail = await fetch('https://api.pepipost.com/v5/mail/send', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'content-type': 'application/json',
                'api_key': process.env.PEPIPOST_API_KEY
            },
            body: formData
        });
        const sendEmailRes = await sendEmail;
        res.status(sendEmailRes.status).end(JSON.stringify(sendEmailRes));
    } catch (error) {
        console.log(error);
        return res.status(error.status || 500).end(error.message);
    }
}

