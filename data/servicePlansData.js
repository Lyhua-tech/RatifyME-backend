const insertData = require("../utils/insertData");
const ServicePlans = require("../models/ServicePlans");

const servicePlansData = [
    {
        name: "Standard",
        description: "A free plan with limited access to badge platform features.",
        duration: 1,
        price: 0,
        badgeLimit: 5,
        peopleLimit: 10,
        isBadgeVerificationAvailable: false,
        isBadgeBackpackFress: false,
        isBadgeReportsAvailable: false,
        isBadgeCertificatesAvailable: false,
        isTechnicalSupportType: false,
        stripeProductId: "prod_R6ENzvoPlRRjtp",
        stripePriceId: "price_1QE1uxEF0UjOYuRsQqysmGOy",
    },
    {
        name: "Standard",
        description: "A free plan with limited access to badge platform features.",
        duration: 12,
        price: 0,
        badgeLimit: 5,
        peopleLimit: 10,
        isBadgeVerificationAvailable: false,
        isBadgeBackpackFress: false,
        isBadgeReportsAvailable: false,
        isBadgeCertificatesAvailable: false,
        isTechnicalSupportType: false,
        stripeProductId: "prod_R1oU11lGfn4zIE",
        stripePriceId: "price_1QE1xoEF0UjOYuRsmFQUNVkh",
    },
    {
        name: "Professional",
        description: "A plan for professionals and small teams with more badges and basic support.",
        duration: 1,
        price: 39.99,
        badgeLimit: 50,
        peopleLimit: 100,
        isBadgeVerificationAvailable: true,
        isBadgeBackpackFress: true,
        isBadgeReportsAvailable: true,
        isBadgeCertificatesAvailable: true,
        isTechnicalSupportType: true,
        stripeProductId: "prod_R6ERzT1vJ2kNmO",
        stripePriceId: "price_1QE1yzEF0UjOYuRsT5O2jGaC",
    },
    {
        name: "Professional",
        description: "A plan for professionals and small teams with more badges and basic support.",
        duration: 12,
        price: 299.99,
        badgeLimit: 50,
        peopleLimit: 100,
        isBadgeVerificationAvailable: true,
        isBadgeBackpackFress: true,
        isBadgeReportsAvailable: true,
        isBadgeCertificatesAvailable: true,
        isTechnicalSupportType: true,
        stripeProductId: "prod_R6EStCsFF3xdyH",
        stripePriceId: "price_1QE1zqEF0UjOYuRsNMeIl595",
    },
    {
        name: "Premium",
        description:
            "An all-inclusive plan for enterprises with maximum badges, people, and premium support.",
        duration: 1,
        price: 59.99,
        badgeLimit: 500,
        peopleLimit: 5000,
        isBadgeVerificationAvailable: true,
        isBadgeBackpackFress: true,
        isBadgeReportsAvailable: true,
        isBadgeCertificatesAvailable: true,
        isTechnicalSupportType: true,
        stripeProductId: "prod_R6EWFSJ62yUacg",
        stripePriceId: "price_1QE23CEF0UjOYuRstVYi3Pca",
    },
    {
        name: "Premium",
        description:
            "An all-inclusive plan for enterprises with maximum badges, people, and premium support.",
        duration: 12,
        price: 499.99,
        badgeLimit: 500,
        peopleLimit: 5000,
        isBadgeVerificationAvailable: true,
        isBadgeBackpackFress: true,
        isBadgeReportsAvailable: true,
        isBadgeCertificatesAvailable: true,
        isTechnicalSupportType: true,
        stripeProductId: "prod_R6EXgRTk2Sw38G",
        stripePriceId: "price_1QE241EF0UjOYuRsdD7p64z2",
    },
];

insertData(ServicePlans, servicePlansData, { validate: false });
