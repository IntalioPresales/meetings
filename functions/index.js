const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp(functions.config().firebase);

/**
* Here we're using Gmail to send
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'presales.everteam@gmail.com',
        pass: 'P@$$W0rd123'

    }});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        const data = req.body;

        const mailOptions = {
            from: 'Presales Everteam <presales.everteam@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: data.email,
            subject: 'EVENT :'+data.event_name, // email subject
            html: `<html>
            <head>
                <title></title>
            </head>
            <body>
                <table align="center" bgcolor="#EAECED" border="0" cellpadding="0"
                cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td align="center" valign="bottom">
                                <table width="600">
                                    <tbody>
                                        <tr>
                                            <td align="center" valign="bottom">
                                                <table border="0" cellpadding="0"
                                                cellspacing="0" width="580">
                                                    <tbody>
                                                        <tr>
                                                            <td align="right" valign=
                                                            "bottom">
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        <tr style="font-size:0;line-height:0">
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td align="center" valign="top">
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>
                                <div style=
                                "color:inherit;font-size:inherit;line-height:inherit;margin:inherit;padding:inherit">
                                </div>

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>

                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td align="center" valign="top">
                                                <table bgcolor="#FFFFFF" border="0"
                                                cellpadding="0" cellspacing="0" style=
                                                "overflow:hidden!important;border-radius:3px"
                                                width="580">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <a href=
                                                                "http://get.invisionapp.com/e1t/c/*W8q197m87bTZDW3GQmLK13hZky0/*W13K2W41sYqvmN3D1Zp-wdFZ00/5/f18dQhb0Sq5v8Y9-zHW70BpRg4T_wzgW64zw9H1q7sY6MscWgjXD6prW39DrXV26p8nbW5CR6n97cVKJwW50lYRv7nwMJHW2JZL_31xqJy3VYnPL76Qj-05W5DHNj65CRgMyW5CqxQZ2m3jxNW7dcWxp7dF4v9W1nrCGB51LTg5N2lklC6dVkfWW5t9bL01bMSdCW7JCxGl81bhDKW7N_KqM12CJpdW3VKVtL6mGW-jW7PZWjr6pzHWBW7bnnc_7fKqQcW94q7cq6VKJl2W1hC_8g5lppF5W2D-4Yc52QNf_W2m2rxK5p59FbW5RS7T25TtbXWW5D7H8S3vhVZgW3C61pK6z1LZmW5PHRKY3shL5DW4LjDF06gJdtwW47Z6Xs3JQNrfW3r_Q0M6-9Cf3W3Ygcw64wwzDBW48fZ1n6dtfCzW4pcD4v82G-VBN8yRbpjrPpMvVrJh2D5bVWMXW2yqJMJ3gqrMyW69NJRJ4qTk1qW3Pdvn34J35SnW2N3wzQ9c5f97W1CrJJj7gZNh5W87C4Bf16q663W3zxJ4g3FW2hmN3hGm6lrKGtgW5kBqs23X6Vls0"
                                                                target="_blank"><img src=
                                                                "https://i.ibb.co/6Jk8sDB/5812.jpg"
                                                                style=
                                                                "border:0;max-width:100%!important"
                                                                width="580" height="400"></a>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center">
                                                                <table width="85%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align=
                                                                            "center">
                                                                                <h2 style=
                                                                                "margin:0!important;font-family:'Open Sans',arial,sans-serif!important;font-size:28px!important;line-height:38px!important;font-weight:200!important;color:#252b33!important">
                                                                                EVENT: ${data.event_name}</h2>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td align=
                                                                            "center" style=
                                                                            "font-family:'Open Sans',arial,sans-serif!important;font-size:22px!important;line-height:38px!important;font-weight:400!important;color:#252b33!important;font-style:italic!important">
                                                                            Staring Time: ${data.event_start_date}<br>
                                                                            Ending Time: ${data.event_end_date}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center">
                                                                <table border="0"
                                                                cellpadding="0"
                                                                cellspacing="0" width=
                                                                "78%">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align=
                                                                            "center" style=
                                                                            "font-family:'Open Sans',arial,sans-serif!important;font-size:16px!important;line-height:30px!important;font-weight:400!important;color:#7e8890!important">
                                                                            Event Location: ${data.event_location}<br>Invitees: ${data.event_invitees}</td>
                                                                        </tr>
                                                                        <tr>
                                                                        <td align=
                                                                        "center" style=
                                                                        "font-family:'Open Sans',arial,sans-serif!important;font-size:16px!important;line-height:30px!important;font-weight:400!important;color:#7e8890!important">
                                                                        <b>Agenda:</b><br>
                                                                        ${data.event_agenda}</td>
                                                                    </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                            <td align="center" valign=
                                                            "top">
                                                                <table border="0"
                                                                cellpadding="0"
                                                                cellspacing="0">
                                                                    <tbody>
                                                                        <tr>
                                                                            <td align=
                                                                            "center"
                                                                            valign="top">
                                                                                <a href=
                                                                                "https://presales-etgs.com/demo/everteam.meeting/#/invitation/${data.event_name}"
                                                                                style=
                                                                                "background-color:#00796B;padding:14px 28px 14px 28px;border-radius:3px;line-height:18px!important;letter-spacing:0.125em;text-transform:uppercase;font-size:13px;font-family:'Open Sans',Arial,sans-serif;font-weight:400;color:#ffffff;text-decoration:none;display:inline-block;line-height:18px!important"
                                                                                target=
                                                                                "_blank">Confirm</a>
                                                                                <a href=
                                                                                "https://presales-etgs.com/demo/everteam.meeting/#/invitation/${data.event_name}"
                                                                                style=
                                                                                "background-color:#921A24;padding:14px 28px 14px 28px;border-radius:3px;line-height:18px!important;letter-spacing:0.125em;text-transform:uppercase;font-size:13px;font-family:'Open Sans',Arial,sans-serif;font-weight:400;color:#ffffff;text-decoration:none;display:inline-block;line-height:18px!important"
                                                                                target=
                                                                                "_blank">Decline</a>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>&nbsp;</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </body>
            </html>
            ` // email content in HTML
        };

        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });
});
