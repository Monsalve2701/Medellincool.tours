export const TOURS_DATA: any[] = [];

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Tours", href: "/tours" },
    { label: "About Us", href: "#about" },
    /* { label: "Reviews", href: "#reviews" },*/
];

export const HERO_CONTENT = {
    titleStart: "Discover the Magic of",
    titleHighlight: "Medellín",
    subtitle: "Experience premium, curated tours through the City of Eternal Spring with Medellín's highest-rated local guides.",
    primaryCta: "Explore Tours",
    secondaryCta: "Watch Video",
};

export const CTA_CONTENT = {
    titleStart: "Seamless Airport",
    titleHighlight: " Transfers",
    titleEnd: "",
    subtitle: "Start your journey without the stress. We provide reliable, comfortable, and private transportation to and from JMC International Airport.",
    features: [
        { label: "Fixed Rates", icon: "cash" },
        { label: "Professional Drivers", icon: "location" },
        { label: "Travel Insurance", icon: "shield" }
    ],
    form: {
        title: "Book Your Transfer",
        pickupLabel: "Pickup Location",
        pickupPlaceholder: "e.g. JMC Airport or Hotel Name",
        destLabel: "Destination",
        destPlaceholder: "Enter your drop-off address",
        serviceLabel: "Service Type",
        serviceOptions: ["Economy", "Space +", "Premium"],
        dateLabel: "Date",
        timeLabel: "Time",
        submitButton: "Check Availability"
    }
};

export const FOOTER_CONTENT = {
    logo: {
        icon: "mountain", // placeholder logic for the green square with mountains
        textStandard: "medellincool.",
        textHighlight: "tours"
    },
    socialLinks: [
        { label: "Instagram", href: "#" },
        { label: "Facebook", href: "#" },
        { label: "TripAdvisor", href: "#" }
    ],
    copyright: `© ${new Date().getFullYear()} Medellin Cool Tours. All rights reserved. RNT: 123456`,
    legalLinks: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" }
    ]
};

export const INSIDER_GUIDE_DATA = {
    titleStart: "Local Knowledge",
    titleHighlight: "Medellín Insider Guide",
    subtitle: "Beyond the tours, explore our curated selection of the absolute best spots in the city across lifestyle and wellness.",
    categories: [
        {
            tag: "Restaurants",
            title: "Best Parrilla in Town",
            description: "Discover where the locals go for the most authentic charcoal-grilled steaks and traditional sides.",
            image: "https://images.pexels.com/photos/1537635/pexels-photo-1537635.jpeg",
            link: "#"
        },
        {
            tag: "Clubs",
            title: "Medellin's Nightlife",
            description: "Navigate the rhythm of Medellin's most famous party district with our top lounge and club picks.",
            image: "https://images.pexels.com/photos/3249760/pexels-photo-3249760.jpeg",
            link: "#"
        },
        {
            tag: "Spa & Wellness",
            title: "Relaxing Retreats",
            description: "Find your sanctuary in the mountains with our review of the most exclusive spa treatments available.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaqwWU3wlJJ6XtKLlHWE38XoJ9CRHlqd7KJGSFsV4RDZqhe9ji8Yzs60BAJuIPomCzPXzkBOIqnhH_n7WVmRrHSZe0343Wi_pjZR2hr7QMjMJcANf40o1ziktQ71JFRk6F2Agt8z_s48ZgjVftGvy-xrQoyyEYQ10CWBrDmyUwtYwYUidNMfMwr0Q8nPulPWyCNgpP_K5Mrk0BwwFgA2-GTRN5MtIemHKnOsyw8FDFtS3-Hej74TTPzxCbSybvaHpXsz8kA-FJchU",
            link: "#"
        },
        {
            tag: "Medical & Cosmetic",
            title: "World-class Wellness",
            description: "Medellín is a global hub for care. See why people travel from all over for these top-tier services.",
            image: "https://media.istockphoto.com/id/1374914578/photo/beautiful-young-woman-at-beauty-clinic.jpg?s=612x612&w=0&k=20&c=e-Qd8LkXnSo_EjHXdjFTFd8bJu-Lu7f1a7vqhzeiYDQ=",
            link: "#"
        }
    ]
};

export const BLOG_HERO_DATA = {
    tag: "Official Travel Guide",
    title: "Medellín Insider Blog",
    subtitle: "Discover hidden gems, local secrets, and the best experiences the City of Eternal Spring has to offer.",
    ctaPrimary: "Explore Stories",
    ctaSecondary: "Latest Posts",
    backgroundImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuATNOTTu5POhF8afFPj5eh1-fgmjM2RSkHQhlFHTxrrlSfOwYVrsE-FB7fcoQdFVTNlPfwIpC1mJCVaVQDsZF6iavvLiFMSZ-PNFNypwDzivjaPGcwcyTjRpb6y0SXBdQezMbW9GT15-nHqewvEDa0MT4ODd3oYu8EDj3ewm1cKJaSnLU_ve0ZmSBeVWT3zsiJdHOu2bIxyKaZP-pPNuIzSAGCW62f04y79y2hMUXZBaJs0sW1_gxGyZLpP0oh6syEbVNN_dL5OBCQ"
};

export const BLOG_FILTERS = [
    "All", "Dining", "Nightlife", "Wellness", "Medical & Cosmetic", "Culture"
];

export const BLOG_POSTS = [
    {
        id: "post-1",
        tag: "Dining",
        readTime: "4 min read",
        date: "Oct 12, 2023",
        title: "5 Best Arepa Spots in Poblado",
        description: "Discover the authentic taste of paisa corn cakes in the heart of El Poblado. From traditional flavors to modern twists...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJe74f_TYU9bRB7_3piqD_caLcMX_0wZZIOJXLGLpI0CBsiA3p--oA8y7iSRgUcBIrj7d0TCYqVvQeLAV9-YC1Em6yz9aa-1UzthGo7Rpl09v7x5yuGtYenYkEZjnZ6xo3mIJgPR88xv5-8DAi_X3UglHiT_LCnZiNNlGKF3bn8AnOQUXtw7gtGpcxIcwNX7oTdl06vJO1hVa93y4C3Wh8ux8TuyE7Rc6EtA4J958zWUrfmu42ON60tCMV_Ag1AZ70f660TEDrRNQ"
    },
    {
        id: "post-2",
        tag: "Wellness",
        readTime: "6 min read",
        date: "Oct 10, 2023",
        title: "Relaxation Guide: Top Spas in the Valley",
        description: "From thermal baths to luxury massages, find your zen in the Aburrá Valley with our curated list of relaxation havens...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5iIMJDdKCRT_u1xCw5Kn9OQ_p7-XBgh3q_EklPHoGOpp7C2ulNXdjCqLLnugEnGxhIPr4ga3l4UNeYPHa6HvSdEdYER1JpJ7QWK75iXj10iGY77DQn8npNwFOnRZPx2knxMpNqGQmPNK3cfIPCpweJhsbdW7Hnb_BCHxfxAVGwcnmXVFjSVPkgIKBKYaovFNOafNJBk7C2UXNLoYdSZEUVhAcRMVPRoE3HrtecnarqhSfIxEZ7agoxVAsWuA7yXnQEEYycKAnpMk"
    },
    {
        id: "post-3",
        tag: "Nightlife",
        readTime: "5 min read",
        date: "Oct 08, 2023",
        title: "Nightlife: Where to Dance Salsa",
        description: "A curated list of the most authentic salsa bars for an unforgettable night of rhythm and energy in Medellin...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu5Fg3u1AHQC96Z2OUqb3OFNRv4A4Tgj8YxM7fdQU4Zke3bL9TZJ3NyCW72Wt3cfGQXisMgUqdq6K00299LdVSGFiPsuZM4XCBjPsehOCXN_w_HYL2ArLWcRNfp5MSw6Ak4DPA2lmSgNJgiRdDck6YqMSvASO7xiVVp1LL9xTwscW_N4DF8wAcUcN4y7vUge4Dymkh61dlb93TGfhzLYdLo2bwR7pZmH346M73TfVIe3LrM8itDGBDAwoW2v5nrPQuxVR8h1vQeow"
    },
    {
        id: "post-4",
        tag: "Medical",
        readTime: "8 min read",
        date: "Oct 05, 2023",
        title: "Medical Tourism: Why Medellín?",
        description: "Everything you need to know about the world-class healthcare facilities and recovery spaces in the city...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJyCenN6thWya5bPxiv_EP47FZWqCay9X3s0ixClFuUUfoWQxaWDvd9pJTth2AkKMVFB2B3k0M6OeXhRkpqfwQZKQdZu3GFiLamZGfEFENM3mJ_J41p6dOAFXZRe6N4lT_vcKpS9yDLr_FpqW4Fb_BBF1o48zWzLTH2xn1u8jWrj4zHNIfG4rWIJnm04qL_-7HBY_UoM_TYKAHEyu6xFgMibx6k1exbQApB19Z3Vkj5tRpmzcIS_qEOX6S01LOZdmHbz4qdjVZqSI"
    },
    {
        id: "post-5",
        tag: "Culture",
        readTime: "7 min read",
        date: "Oct 01, 2023",
        title: "The Transformation of Comuna 13",
        description: "A deep dive into the history, art, and resilience of Medellín's most vibrant neighborhood and its colorful street art...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_UeyMiMHdLyuN-IqxZzC8BPFW6aghOSY0tkT3ameOWyT3wZ3qL1I_9KbyaVTOXEBxyR49oGtx0nKi0xCvDWaH7in1nLsK064ntzrmp1wXrTp3viWeqHoURuCyPmKrwCpIAXVjO0tZ0QYm1PmaaSc9qd3l7PyrbTLo_HRGTUYvLEqe8NGh9MfRP-Hb4eX5KYUa_6IB9JW1bHrMLKmRU1Q1lAwcIaim47KdPzr0gXEpxeL1wLXQBApDv5Xb-Zsu0PUmaVeX9QvubE8"
    },
    {
        id: "post-6",
        tag: "Dining",
        readTime: "5 min read",
        date: "Sep 28, 2023",
        title: "Coffee Lover's Tour: From Bean to Cup",
        description: "The ultimate guide to experiencing the world-renowned Colombian coffee culture right here in the city...",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuADl-L7I8_1gL7Su2W-HDlGndjmGt9lOq-5p0hSUThO5cerKmENWCE6CZYXmP95u-A2UE1aw1lIDqgYwKkc__-2FxyIYZUT78zhGiiwmNC0B_CYhlewCfJ9eUB244UsRj2vvrFIG9SMwQPYxcLMn64KhU_8uF23XbJjuxPbq7XKbDe7Bng7EDx9ZLPYeaGRuvv_NgQ0UC1UE_7dZKEMeubswpMrrDfW93FctaCnwdmVO6UOoH2UvmzFIJlVTm-FdL91xO3F2JOfKFg"
    }
];

export const NEWSLETTER_DATA = {
    title: "Never miss an adventure",
    description: "Sign up for our newsletter to receive the latest travel guides, exclusive offers, and insider tips from Medellín delivered to your inbox.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    disclaimer: "By subscribing, you agree to our Privacy Policy and Terms of Service."
};

export const BLOG_POST_DETAIL_DATA = {
    breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Blog", href: "/blog" },
        { label: "Coffee Lover's Tour", href: "#" }
    ],
    hero: {
        title: "Coffee Lover's Tour: From Bean to Cup in La Sierra",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCd6TiotKXbtBzbCUrC43fWpmtjikGJPEN53rweAWeA-FnKSiAEJ5eX8qupfkbp5jyW1pS5P6OdO8Nz1hVoy-bpWd3lMEXdKJE-gdPk3JEFd2A0i2my6FgdHUewVZEEVI-8W_06GBUGAT9UVmVlkcRBCoLr2nJszFdglMT_gdftWwIzzfivp1qm4Huv4eLibKaHTA1u9cE843uLzqG1lHfZRALJ0qZOXxs1Ck3b1k1A5o9gTXEl25d4zOfRGyuaBeD3qdo99fgecns"
    },
    author: {
        name: "Juan Valdez",
        avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1rWYaP45tmReHX2nslKetrQ68wzBhZBdOhFgN0OrH16pbXuoa5bA5Vfwaicz5JQ6qGSykhoc5ezF2BtOiott1l18jK0JNXPaGQO9g3e4vQhcKtk-WW3LV20Lj5rwHe7Cz9DErX2lCorybzrFUktbN2jhSmMeHCWJJfTXtmo_OwWKxwCT90JaqA1E5AuUo52d9YMfaNIVmN7exR2R7b9kc21j9I9gobQ4RvnQoxLrkBgp86ll_7T6qHOK0vvi3W9aK6xaIzZItjBc",
        date: "October 12, 2023",
        readTime: "8 min read"
    },
    images: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDiQ1s-FEhtg-ksZWC97pICNvy2z7kMravImHggUvRJ1ptnDxo7vfqDg-QAW1eNYpL59wfwRLT1uG062-2w1rH0PKk9dkVqwKzWsYMQpZSHsrF5uoQT9lT6k_IdU_jst17QCsfs_5AMD5OqBgWz1xrw6j0vGEzkCSLYc8Jdz-YDNFiXNGMkjv6F3daoLe34jpRtrVTm2gFHqyBIbgKCzUe-js-BRwiDPzkGOr7QZU1ym7aJGBD9YIKumhCLqtPT1zF3aT7xGslADMA",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD76swWAcdQJsPDxSQEFpKShQS9PcRe6UxFw30wqKkrYDlTGPhCWpegExA0Zv1d6YEscmFCx-nuT9FmZk8NO4vVAyB9csiSgTDZivCXoLnodmV3CNowZM0SwSS_nMnNcBLq9pTo6ljde76xu__0hbYmB2TInBYk8UOongHHi9KfSHj0IiHRJje4itKbOiDKWNB8V7_2_QMztvHacHr80MyBGYc6ckOPJOFAvo1l4tSv7tvPEVT2DA2AbDW6IAjnIu-r0Pn-uJ8gWRs",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuARtiEH2lhMu4O5JZbX5fSrhNGfR6KbwjTTNYtzdPnvqQGt3sf08IacJm5pykZTf3wTgjIcZ67uO6QwBGrcEPVpNBUDSJSGzgZeOaXuFdh1nb-18-nHkFp3noRjXc_55032Sspr0lSaLewAkK4CsYDelGsCChAm3321qtyqW_UrkGEMDglnwgVF9wCCYHd0WOc_0nireOCIYq_HhK0WeM6nuXUXHvE7O1Zzj7qS0O98f1k50Ix47a86bEGXUjQ8Mw7WHmCzpIdo3mc"
    ],
    sidebar: {
        title: "Experience This Tour",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAN0ioXdUl2RXBJZfnqMk1joBc5egLHdO9UT4uN4z0kyVF5Mo0eMr3RY65KptOrRGjdynwC0NL5JkynFxn2mvB8xYCFdoNOeX_VR3q9wxQuXJPd0EeQ0ub7aG9qyLysy9EpBhAUAzsj8zzuk1GaEfvEsRlCTjE_A6Pt6bSI-ngFRTJnyA1S58qu9CimEPfu57uwfIlWh8tH2ZE24-3PFPiMUGS41OPOs0p5vGkzqtbTVy2z_49vS7lTjwdU02696Kr1tWQnyuJuOU",
        price: "$45 USD",
        rating: "4.9",
        features: [
            "4-Hour Guided Experience",
            "Traditional Lunch Included",
            "Transportation from El Poblado"
        ],
        button: "Book This Tour Now"
    },
    sidebarNewsletter: {
        title: "Get Medellin Insider Tips",
        subtitle: "Weekly guides on hidden gems and cultural experiences.",
        placeholder: "Email address",
        buttonText: "Subscribe"
    },
    relatedArticles: [
        {
            title: "Best Arepa Spots in El Poblado",
            description: "From street stalls to gourmet kitchens, where to find the perfect cheesy snack.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDt0DMw-nR8fyybxSurG29HcNE7KRQHILrTVFV5Yrvoj9ekSZEpLd6gJMZWIdgNAFAI1AKm7AWX4upy7AQY2h09jU8Ha59Z353WOrud8N93EOjF3I61m8oKbASna_sa-QzYnZepgtQ0wQRKakeVTLRMIrXcs9ZX9juXzgmLTfAqXW32lehl9rNNFARcUCRQpfy1k0UTT2HrnVjAm783nTw2D0xrDYK0oC-cg1k2n_L1pcB1XftNzGGPSbn1SHxzWL4Jca8_rkt5cQc",
            link: "#"
        },
        {
            title: "Medellín Nightlife Guide",
            description: "Salsa bars, rooftop lounges, and the best techno clubs in the city.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpiSeO-A3s26jZSI9Z3gvxrvCd33rq7fLAyTPOuElJ7hslDF60INByuE7-KjeU4Ni0o8lRvo-5Vux1tJ3JpC1XHJ-dmhJGUxkMeNnTDyAaJY3XxGvCvsoFT-fkCym2QLq_iTVcGsg4I3ScNnpWdUYPrI-d4FzTNiHtem9CKZDrfbjraRDclFrXoZU48KTxGuntlJRBRmiwz5ufQ0Xa2CHFwatyqUr1Y07oZ7TZSZpqhDB1PluWXr-PmiurwI1PUlyrRhnNGhm5Cc4",
            link: "#"
        },
        {
            title: "Comuna 13: Art & History",
            description: "A deep dive into the transformation of Colombia's most famous neighborhood.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUWhJ43VCETSutYreIQmt1zUtiL5adyqLK_FV6BsTFsnCfsDpRaEIIOaPmCgIDfebiqALqlztS_FGXDOKXdC6LP2R9z9RNkFl6agYSiMvOwh8RcnB80hq41qulra3B3J_XSbdCk6Ch38bSSiO5TyPGq9skDllAMaPTQOBTNIyvFpCTWpfP0CbDs64RO0vOb2dXo5vDWlmHN5E8O7oAohxHxIqqdY5hZ0UwCu9j_78YFGt8YJtDrTRpp8-4LaPLdIJPxt0kZxISLhQ",
            link: "#"
        }
    ]
};

