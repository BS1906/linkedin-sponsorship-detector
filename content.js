// function classifySponsorship(text) {
//     text = text.toLowerCase();

//     // Case 1: Clearly NO sponsorship
//     const noPatterns = [
//         "no sponsorship",
//         "do not sponsor",
//         "without sponsorship",
//         "not eligible for visa sponsorship",
//         "must be authorized to work without sponsorship",
//         "we cannot sponsor",
//         "no h1b",
//         "no visa sponsorship"
//     ];

//     for (let pattern of noPatterns) {
//         if (text.includes(pattern)) {
//             return {
//                 status: "NO SPONSORSHIP",
//                 color: "#e74c3c"   // red
//             };
//         }
//     }

//     // Case 2: Clearly sponsorship provided
//     const yesPatterns = [
//         "visa sponsorship available",
//         "will sponsor",
//         "h1b sponsorship",
//         "sponsorship provided",
//         "we sponsor",
//         "opt stem eligible",
//         "sponsorship is available"
//     ];

//     for (let pattern of yesPatterns) {
//         if (text.includes(pattern)) {
//             return {
//                 status: "SPONSORSHIP PROVIDED",
//                 color: "#2ecc71"   // green
//             };
//         }
//     }

//     // Case 3: Not mentioned
//     return {
//         status: "NOT MENTIONED",
//         color: "#f1c40f"   // yellow
//     };
// }


// // Wait until page loads properly
// setTimeout(() => {

//     // Remove old badge if exists
//     const oldBadge = document.getElementById("sponsorship-badge");
//     if (oldBadge) oldBadge.remove();

//     const jobText = document.body.innerText;

//     const result = classifySponsorship(jobText);

//     const badge = document.createElement("div");
//     badge.id = "sponsorship-badge";
//     badge.innerText = result.status;

//     badge.style.position = "fixed";
//     badge.style.top = "20px";
//     badge.style.right = "20px";
//     badge.style.padding = "12px 18px";
//     badge.style.backgroundColor = result.color;
//     badge.style.color = "black";
//     badge.style.fontWeight = "bold";
//     badge.style.borderRadius = "10px";
//     badge.style.fontSize = "14px";
//     badge.style.zIndex = "9999";
//     badge.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

//     document.body.appendChild(badge);

// }, 3000);

// Only run on LinkedIn job pages

// Only run on actual job detail pages


// 2nd try method 

// function isJobPage() {
//     return window.location.pathname.includes("/jobs/view/");
// }

// function removeBadge() {
//     const oldBadge = document.getElementById("sponsorship-badge");
//     if (oldBadge) oldBadge.remove();
// }

// function classifySponsorship(text) {
//     text = text.toLowerCase();

//     const noPatterns = [
//         "no sponsorship",
//         "do not sponsor",
//         "without sponsorship",
//         "not eligible for visa sponsorship",
//         "must be authorized to work without sponsorship",
//         "we cannot sponsor",
//         "no h1b",
//         "no visa sponsorship"
//     ];

//     for (let pattern of noPatterns) {
//         if (text.includes(pattern)) {
//             return { status: "NO SPONSORSHIP", color: "#e74c3c" };
//         }
//     }

//     const yesPatterns = [
//         "visa sponsorship available",
//         "will sponsor",
//         "h1b sponsorship",
//         "sponsorship provided",
//         "we sponsor",
//         "opt stem eligible",
//         "sponsorship is available"
//     ];

//     for (let pattern of yesPatterns) {
//         if (text.includes(pattern)) {
//             return { status: "SPONSORSHIP PROVIDED", color: "#2ecc71" };
//         }
//     }

//     return { status: "NOT MENTIONED", color: "#f1c40f" };
// }

// function showBadge() {
//     if (!isJobPage()) {
//         removeBadge();
//         return;
//     }

//     removeBadge();

//     const jobText = document.body.innerText;
//     const result = classifySponsorship(jobText);

//     const badge = document.createElement("div");
//     badge.id = "sponsorship-badge";
//     badge.innerText = result.status;

//     badge.style.position = "fixed";
//     badge.style.top = "20px";
//     badge.style.right = "20px";
//     badge.style.padding = "12px 18px";
//     badge.style.backgroundColor = result.color;
//     badge.style.color = "black";
//     badge.style.fontWeight = "bold";
//     badge.style.borderRadius = "10px";
//     badge.style.fontSize = "14px";
//     badge.style.zIndex = "9999";
//     badge.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";

//     document.body.appendChild(badge);
// }

// // Initial run
// setTimeout(showBadge, 2000);

// // Detect LinkedIn SPA navigation changes
// let lastUrl = location.href;
// new MutationObserver(() => {
//     if (location.href !== lastUrl) {
//         lastUrl = location.href;
//         setTimeout(showBadge, 1500);
//     }
// }).observe(document, { subtree: true, childList: true });


//3rd try method

// ===============================
// LinkedIn Sponsorship Detector
// Handles:
// 1) /jobs/view/
// 2) /jobs/search-results/
// 3) Clicking multiple jobs

// Remove badge
//===============================
// function removeBadge() {
//     const old = document.getElementById("sponsorship-badge");
//     if (old) old.remove();
// }

// // ===============================
// // Check if current page is job page
// // ===============================
// function isJobPage() {
//     return window.location.pathname.includes("/jobs/");
// }

// // ===============================
// // Classification logic
// // ===============================
// function classify(text) {
//     text = text.toLowerCase();

//     const noList = [
//         "no sponsorship",
//         "do not sponsor",
//         "without sponsorship",
//         "not eligible for visa sponsorship",
//         "must be authorized to work without sponsorship",
//         "we cannot sponsor",
//         "no h1b",
//         "no visa sponsorship"
//     ];

//     for (let word of noList) {
//         if (text.includes(word)) {
//             return { label: "NO SPONSORSHIP", color: "#e74c3c" };
//         }
//     }

//     const yesList = [
//         "visa sponsorship available",
//         "will sponsor",
//         "h1b sponsorship",
//         "sponsorship provided",
//         "we sponsor",
//         "opt stem eligible",
//         "sponsorship is available"
//     ];

//     for (let word of yesList) {
//         if (text.includes(word)) {
//             return { label: "SPONSORSHIP PROVIDED", color: "#2ecc71" };
//         }
//     }

//     return { label: "NOT MENTIONED", color: "#f39c12" };
// }

// // ===============================
// // Add badge
// // ===============================
// function addBadge(result) {
//     removeBadge();

//     const badge = document.createElement("div");
//     badge.id = "sponsorship-badge";
//     badge.innerText = result.label;

//     badge.style.position = "fixed";
//     badge.style.top = "110px";
//     badge.style.right = "25px";
//     badge.style.padding = "10px 18px";
//     badge.style.background = result.color;
//     badge.style.color = "white";
//     badge.style.fontWeight = "bold";
//     badge.style.borderRadius = "8px";
//     badge.style.zIndex = "9999";
//     badge.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
//     badge.style.fontFamily = "Arial, sans-serif";

//     document.body.appendChild(badge);
// }

// // ===============================
// // Get job description
// // ===============================
// function getJobText() {

//     const container = document.querySelector(
//         '[data-sdui-component="com.linkedin.sdui.generated.jobseeker.dsl.impl.aboutTheJob"]'
//     );

//     if (!container) return null;

//     return container.innerText;
// }

// // ===============================
// // Main logic
// // ===============================
// function checkJob() {

//     // If NOT job page → remove badge and stop
//     if (!isJobPage()) {
//         removeBadge();
//         return;
//     }

//     const text = getJobText();

//     if (!text || text.length < 150) {
//         removeBadge();
//         return;
//     }

//     const result = classify(text);
//     addBadge(result);
// }

// // ===============================
// // Initial run
// // ===============================
// setTimeout(checkJob, 2000);

// // ===============================
// // Handle SPA URL + content changes
// // ===============================
// let lastUrl = location.href;

// const observer = new MutationObserver(() => {

//     // Detect URL change
//     if (location.href !== lastUrl) {
//         lastUrl = location.href;
//         removeBadge();
//     }

//     setTimeout(checkJob, 800);
// });

// observer.observe(document.body, {
//     childList: true,
//     subtree: true
// });


// //4th try


//========================================
//CONFIG
//========================================

// const BADGE_ID = "sponsorship-badge";
// let lastProcessedText = "";

// // ===============================
// // Remove Badge
// // ===============================
// function removeBadge() {
//     const old = document.getElementById(BADGE_ID);
//     if (old) old.remove();
// }

// // ===============================
// // Add Badge
// // ===============================
// function addBadge(label, color) {
//     removeBadge();

//     const badge = document.createElement("div");
//     badge.id = BADGE_ID;
//     badge.innerText = label;

//     badge.style.position = "fixed";
//     badge.style.top = "120px";
//     badge.style.right = "30px";
//     badge.style.padding = "10px 18px";
//     badge.style.background = color;
//     badge.style.color = "white";
//     badge.style.fontWeight = "bold";
//     badge.style.borderRadius = "8px";
//     badge.style.zIndex = "9999";
//     badge.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
//     badge.style.fontFamily = "Arial, sans-serif";

//     document.body.appendChild(badge);
// }

// // ===============================
// // Sponsorship Classification
// // ===============================
// function classify(text) {

//     const lower = text.toLowerCase();

//     const noPatterns = [
//         "no sponsorship",
//         "no visa sponsorship",
//         "visa sponsorship is not available",
//         "do not sponsor",
//         "without sponsorship",
//         "not eligible for visa sponsorship",
//         "must be authorized to work without sponsorship",
//         "we cannot sponsor",
//         "cannot provide visa sponsorship",
//         "not provide sponsorship",
//         "no h1b"
//     ];

//     for (let p of noPatterns) {
//         if (lower.includes(p)) {
//             return { label: "NO SPONSORSHIP", color: "#e74c3c" };
//         }
//     }

//     const yesPatterns = [
//         "visa sponsorship available",
//         "sponsorship is available",
//         "will sponsor",
//         "h1b sponsorship",
//         "sponsorship provided",
//         "we sponsor",
//         "opt stem eligible"
//     ];

//     for (let p of yesPatterns) {
//         if (lower.includes(p)) {
//             return { label: "SPONSORSHIP PROVIDED", color: "#2ecc71" };
//         }
//     }

//     return { label: "NOT MENTIONED", color: "#f39c12" };
// }

// // ===============================
// // UNIVERSAL JD SELECTOR (ALL 3 LAYOUTS)
// // ===============================
// function getDescriptionText() {

//     const selectors = [

//         // Layout 1 (SDUI)
//         '[data-sdui-component="com.linkedin.sdui.generated.jobseeker.dsl.impl.aboutTheJob"]',

//         // Layout 2 (ComponentKey)
//         '[componentkey^="JobDetails_AboutTheJob"]',

//         // Layout 3 (Classic)
//         '.job-details-about-the-job-module__description'
//     ];

//     for (let sel of selectors) {

//         const elements = document.querySelectorAll(sel);

//         for (let el of elements) {

//             const text = el.innerText?.trim();

//             if (text && text.length > 200) {
//                 return text;
//             }
//         }
//     }

//     return null;
// }

// // ===============================
// // Update Badge
// // ===============================
// function updateBadge() {

//     const text = getDescriptionText();
//     if (!text) return;

//     if (text === lastProcessedText) return;

//     lastProcessedText = text;

//     const result = classify(text);
//     addBadge(result.label, result.color);
// }

// // ===============================
// // Observe Job Panel Changes
// // ===============================
// const observer = new MutationObserver(() => {
//     updateBadge();
// });

// observer.observe(document.body, {
//     childList: true,
//     subtree: true
// });

// // Initial load delay
// setTimeout(updateBadge, 1500);


// // 5th try 

// const BADGE_ID = "sponsorship-badge";
// let lastProcessedText = "";
// let lastUrl = location.href;

// // ===============================
// // Check if current page is Jobs
// // ===============================
// function isJobsPage() {
//     return window.location.pathname.includes("/jobs/");
// }

// // ===============================
// // Remove Badge
// // ===============================
// function removeBadge() {
//     const old = document.getElementById(BADGE_ID);
//     if (old) old.remove();
// }

// // ===============================
// // Add Badge
// // ===============================
// function addBadge(label, color) {
//     removeBadge();

//     const badge = document.createElement("div");
//     badge.id = BADGE_ID;
//     badge.innerText = label;

//     badge.style.position = "fixed";
//     badge.style.top = "120px";
//     badge.style.right = "30px";
//     badge.style.padding = "10px 18px";
//     badge.style.background = color;
//     badge.style.color = "white";
//     badge.style.fontWeight = "bold";
//     badge.style.borderRadius = "8px";
//     badge.style.zIndex = "9999";
//     badge.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
//     badge.style.fontFamily = "Arial, sans-serif";

//     document.body.appendChild(badge);
// }

// // ===============================
// // Sponsorship Classification
// // ===============================
// function classify(text) {

//     const lower = text.toLowerCase();

//     const noPatterns = [
//         "no sponsorship",
//         "no visa sponsorship",
//         "visa sponsorship is not available",
//         "do not sponsor",
//         "without sponsorship",
//         "not eligible for visa sponsorship",
//         "must be authorized to work without sponsorship",
//         "we cannot sponsor",
//         "cannot provide visa sponsorship",
//         "not provide sponsorship",
//         "no h1b"
//     ];

//     for (let p of noPatterns) {
//         if (lower.includes(p)) {
//             return { label: "NO SPONSORSHIP", color: "#e74c3c" };
//         }
//     }

//     const yesPatterns = [
//         "visa sponsorship available",
//         "sponsorship is available",
//         "will sponsor",
//         "h1b sponsorship",
//         "sponsorship provided",
//         "we sponsor",
//         "opt stem eligible"
//     ];

//     for (let p of yesPatterns) {
//         if (lower.includes(p)) {
//             return { label: "SPONSORSHIP PROVIDED", color: "#2ecc71" };
//         }
//     }

//     return { label: "NOT MENTIONED", color: "#f39c12" };
// }

// // ===============================
// // Get Job Description (All Layouts)
// // ===============================
// function getDescriptionText() {

//     const selectors = [

//         // Layout 1 - SDUI
//         '[data-sdui-component="com.linkedin.sdui.generated.jobseeker.dsl.impl.aboutTheJob"]',

//         // Layout 2 - ComponentKey
//         '[componentkey^="JobDetails_AboutTheJob"]',

//         // Layout 3 - Classic
//         '.job-details-about-the-job-module__description'
//     ];

//     for (let sel of selectors) {

//         const elements = document.querySelectorAll(sel);

//         for (let el of elements) {

//             const text = el.innerText?.trim();

//             if (text && text.length > 200) {
//                 return text;
//             }
//         }
//     }

//     return null;
// }

// // ===============================
// // Update Badge
// // ===============================
// function updateBadge() {

//     // If not on jobs page → remove badge
//     if (!isJobsPage()) {
//         removeBadge();
//         return;
//     }

//     const text = getDescriptionText();
//     if (!text) return;

//     if (text === lastProcessedText) return;

//     lastProcessedText = text;

//     const result = classify(text);
//     addBadge(result.label, result.color);
// }

// // ===============================
// // Observe DOM Changes (SPA Safe)
// // ===============================
// const observer = new MutationObserver(() => {
//     updateBadge();
// });

// observer.observe(document.body, {
//     childList: true,
//     subtree: true
// });

// // ===============================
// // Detect URL Change (SPA)
// // ===============================
// setInterval(() => {

//     if (location.href !== lastUrl) {
//         lastUrl = location.href;
//         lastProcessedText = "";
//         removeBadge();
//         updateBadge();
//     }

// }, 1000);

// // Initial delayed run
// setTimeout(updateBadge, 1500);


//-------------------------- 6th try better

// const BADGE_ID = "sponsorship-badge";
// let lastUrl = location.href;
// let lastProcessedText = "";

// // ======================================
// // ONLY RUN ON JOB PAGES
// // ======================================
// function isJobPage() {
//     return location.pathname.includes("/jobs/");
// }

// // ======================================
// // REMOVE BADGE
// // ======================================
// function removeBadge() {
//     const old = document.getElementById(BADGE_ID);
//     if (old) old.remove();
// }

// // ======================================
// // ADD BADGE
// // ======================================
// function addBadge(label, color) {
//     removeBadge();

//     const badge = document.createElement("div");
//     badge.id = BADGE_ID;
//     badge.innerText = label;

//     badge.style.position = "fixed";
//     badge.style.top = "120px";
//     badge.style.right = "30px";
//     badge.style.padding = "10px 18px";
//     badge.style.background = color;
//     badge.style.color = "white";
//     badge.style.fontWeight = "bold";
//     badge.style.borderRadius = "8px";
//     badge.style.zIndex = "99999";
//     badge.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
//     badge.style.fontFamily = "Arial, sans-serif";
//     badge.style.fontSize = "14px";

//     document.body.appendChild(badge);
// }

// // ======================================
// // SPONSORSHIP CLASSIFIER
// // ======================================
// function classify(text) {

//     const lower = text.toLowerCase();

//     const noPatterns = [
//         "no sponsorship",
//         "no visa sponsorship",
//         "visa sponsorship is not available",
//         "do not sponsor",
//         "without sponsorship",
//         "not eligible for visa sponsorship",
//         "we cannot sponsor",
//         "cannot provide visa sponsorship",
//         "no h1b",
//         "not sponsor work visa"
//     ];

//     for (let p of noPatterns) {
//         if (lower.includes(p)) {
//             return { label: "NO SPONSORSHIP ", color: "#e74c3c" };
//         }
//     }

//     const yesPatterns = [
//         "visa sponsorship available",
//         "sponsorship is available",
//         "will sponsor",
//         "h1b sponsorship",
//         "sponsorship provided",
//         "we sponsor",
//         "opt stem eligible",
//         "future sponsorship available"
//     ];

//     for (let p of yesPatterns) {
//         if (lower.includes(p)) {
//             return { label: "SPONSORSHIP PROVIDED ", color: "#2ecc71" };
//         }
//     }

//     return { label: "NOT MENTIONED ⚠️", color: "#f39c12" };
// }

// // ======================================
// // GET JOB DESCRIPTION (ALL LAYOUTS)
// // ======================================
// function getDescriptionText() {

//     const selectors = [

//         // 🔥 NEW SDUI layout (your requested condition)
//         '[data-sdui-component="com.linkedin.sdui.generated.jobseeker.dsl.impl.aboutTheJob"]',

//         // Current common layout
//         ".job-details-about-the-job-module__description",

//         // Partial SDUI match
//         "[data-sdui-component*='aboutTheJob']",

//         // Fallback layouts
//         "[class*='job-details-about']",
//         "div.jobs-description-content__text",
//         ".jobs-box__html-content"
//     ];

//     for (let sel of selectors) {

//         const el = document.querySelector(sel);

//         if (el && el.innerText && el.innerText.length > 120) {
//             return el.innerText.trim();
//         }
//     }

//     return null;
// }

// // ======================================
// // UPDATE BADGE
// // ======================================
// function updateBadge() {

//     if (!isJobPage()) {
//         removeBadge();
//         return;
//     }

//     const text = getDescriptionText();
//     if (!text) return;

//     if (text === lastProcessedText) return;

//     lastProcessedText = text;

//     const result = classify(text);
//     addBadge(result.label, result.color);
// }

// // ======================================
// // OBSERVE SPA NAVIGATION (LinkedIn dynamic page change)
// // ======================================
// function observeUrlChange() {

//     const observer = new MutationObserver(() => {

//         if (location.href !== lastUrl) {
//             lastUrl = location.href;
//             lastProcessedText = "";
//             removeBadge();

//             setTimeout(updateBadge, 1200);
//         }
//     });

//     observer.observe(document.body, {
//         childList: true,
//         subtree: true
//     });
// }

// // ======================================
// // INITIAL LOAD
// // ======================================
// setTimeout(() => {
//     updateBadge();
//     observeUrlChange();
// }, 1500);


//7th try 

// ======================================
// CONFIG
// ======================================
const BADGE_ID = "sponsorship-badge";
let lastProcessedText = "";

// ======================================
// CHECK IF JOB PAGE
// ======================================
function isJobPage() {
    return location.pathname.includes("/jobs/");
}

// ======================================
// REMOVE BADGE
// ======================================
function removeBadge() {
    const old = document.getElementById(BADGE_ID);
    if (old) old.remove();
}

// ======================================
// ADD BADGE
// ======================================
function addBadge(label, color) {

    removeBadge();

    const badge = document.createElement("div");
    badge.id = BADGE_ID;
    badge.innerText = label;

    badge.style.position = "fixed";
    badge.style.top = "120px";
    badge.style.right = "30px";
    badge.style.padding = "10px 18px";
    badge.style.background = color;
    badge.style.color = "white";
    badge.style.fontWeight = "bold";
    badge.style.borderRadius = "8px";
    badge.style.zIndex = "99999";
    badge.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
    badge.style.fontFamily = "Arial, sans-serif";
    badge.style.fontSize = "14px";

    document.body.appendChild(badge);
}

// ======================================
// CLASSIFIER
// ======================================
function classify(text) {

    const lower = text.toLowerCase();

    const noPatterns = [
        "no sponsorship",
        "no visa sponsorship",
        "visa sponsorship is not available",
        "do not sponsor",
        "without sponsorship",
        "not eligible for visa sponsorship",
        "we cannot sponsor",
        "cannot provide visa sponsorship",
        "no h1b",
        "not sponsor work visa"
    ];

    for (let p of noPatterns) {
        if (lower.includes(p)) {
            return { label: "NO SPONSORSHIP ❌", color: "#e74c3c" };
        }
    }

    const yesPatterns = [
        "visa sponsorship available",
        "sponsorship is available",
        "will sponsor",
        "h1b sponsorship",
        "sponsorship provided",
        "we sponsor",
        "opt stem eligible",
        "future sponsorship available"
    ];

    for (let p of yesPatterns) {
        if (lower.includes(p)) {
            return { label: "SPONSORSHIP PROVIDED ✅", color: "#2ecc71" };
        }
    }

    return { label: "NOT MENTIONED ⚠️", color: "#f39c12" };
}

// ======================================
// GET DESCRIPTION (ALL LAYOUTS)
// ======================================
function getDescriptionText() {

    const selectors = [

        // Exact SDUI layout
        '[data-sdui-component="com.linkedin.sdui.generated.jobseeker.dsl.impl.aboutTheJob"]',

        // Partial SDUI
        '[data-sdui-component*="aboutTheJob"]',

        // Current layout
        ".job-details-about-the-job-module__description",

        // Other layouts
        ".jobs-description-content__text",
        ".jobs-box__html-content",
        "div[class*='job-details-about']"
    ];

    for (let sel of selectors) {

        const el = document.querySelector(sel);

        if (el) {
            const text = el.innerText || el.textContent;

            // 🔥 FIXED: no long length restriction
            if (text && text.trim().length > 20) {
                return text.trim();
            }
        }
    }

    // Final fallback: scan full job module
    const jobModule = document.querySelector(".job-details-module");
    if (jobModule) {
        const text = jobModule.innerText;
        if (text && text.trim().length > 20) {
            return text.trim();
        }
    }

    return null;
}

// ======================================
// UPDATE BADGE
// ======================================
function updateBadge() {

    if (!isJobPage()) {
        removeBadge();
        return;
    }

    // 🔥 Auto expand "Show more"
    const showMoreBtn = document.querySelector("button[aria-label*='more']");
    if (showMoreBtn) showMoreBtn.click();

    const text = getDescriptionText();
    if (!text) return;

    if (text === lastProcessedText) return;
    lastProcessedText = text;

    const result = classify(text);
    addBadge(result.label, result.color);
}

// ======================================
// OBSERVE LINKEDIN SPA CHANGES
// ======================================
function observeLinkedInChanges() {

    const observer = new MutationObserver(() => {
        updateBadge();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// ======================================
// INIT
// ======================================
setTimeout(() => {
    updateBadge();
    observeLinkedInChanges();
}, 1500);