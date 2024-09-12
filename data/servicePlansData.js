const insertData = require("./insertData");
const ServicePlans = require("../models/ServicePlans");

const servicePlansData = [
    {
        name: "Quarterly",
        description: "A quarterly plan for 3 months of access.",
        duration: 3, // 3 months
        price: 299.99,
        badgeLimit: 10,
        peopleLimit: 50,
        isBadgeVerificationAvailable: true,
        isBadgeBackpackFress: false,
        isBadgeReportsAvailable: true,
        isBadgeCertificatesAvailable: false,
        isTechnicalSupportType: true,
        stripeProductId: "price_1PxklvBj5Xx4BpZrxrzB6Utp",
    },
    {
        name: "Midyear Membership",
        description: "A membership plan for 6 months of access.",
        duration: 6, // 6 months
        price: 599.99,
        badgeLimit: 20,
        peopleLimit: 100,
        isBadgeVerificationAvailable: true,
        isBadgeBackpackFress: true,
        isBadgeReportsAvailable: true,
        isBadgeCertificatesAvailable: true,
        isTechnicalSupportType: true,
        stripeProductId: "price_1PxkmdBj5Xx4BpZr5UcGp3Zg",
    },
    {
        name: "Annual Advantage",
        description: "An annual plan for 12 months of premium access.",
        duration: 12, // 12 months
        price: 799.0,
        badgeLimit: 50,
        peopleLimit: 200,
        isBadgeVerificationAvailable: true,
        isBadgeBackpackFress: true,
        isBadgeReportsAvailable: true,
        isBadgeCertificatesAvailable: true,
        isTechnicalSupportType: true,
        stripeProductId: "price_1Pxkn8Bj5Xx4BpZrVQ5cDi34",
    },
];
insertData(ServicePlans, servicePlansData, {validate: false});
