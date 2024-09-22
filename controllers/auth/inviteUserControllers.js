const { Institutions, Issuers } = require("../../models");

const CodeInvitationService = require("../../services/codeInvitationServices");

const institutionModel = Institutions;
const institutionParamName = "institutionId";
const issuerRoleId = 3;
const signupLinkIssuer = "http://localhost:5173/join-invitation?as=issuer";
const institutionCode = "code";
const institutionName = "institutionName";

const issuerModel = Issuers;
const issuerParamName = "issuerId";
const earnerRoleId = 4;
const signupLinkEarner = "http://localhost:5173/join-invitation?as=earner";
const issuerCode = "code";
const issuerName = "institutionName";

const inviteIssuerService = new CodeInvitationService(
    institutionModel,
    institutionParamName,
    issuerRoleId,
    signupLinkIssuer,
    institutionCode,
    institutionName,
);

const inviteEarnerService = new CodeInvitationService(
    issuerModel,
    issuerParamName,
    earnerRoleId,
    signupLinkEarner,
    issuerCode,
    issuerName,
);

// Controller to handle inviting issuers
exports.inviteIssuer = (req, res, next) => {
    inviteIssuerService.sendInvitation(req, res, next);
};

exports.inviteEarner = (req, res, next) => {
    inviteEarnerService.sendInvitation(req, res, next);
};

// exports.verifyInvitation = (req, res, next) => {
//     inviteIssuerService.verifyInvitation(req, res, next);
// };

exports.verifyInvitation = (req, res, next) => {
    const { as } = req.query;
    console.log("Role for verification:", as); // Log the role type being verified

    if (as === "issuer") {
        inviteIssuerService.verifyInvitation(req, res, next);
    } else if (as === "earner") {
        inviteEarnerService.verifyInvitation(req, res, next);
    } else {
        return res.status(400).json({
            message:
                "Invalid role. Please specify 'as' query parameter as either 'issuer' or 'earner'.",
        });
    }
};
