// Sample wardrobe items (would come from user-uploaded data in real use)
const wardrobe = {
    tops: ["White Shirt", "Black Turtleneck", "Floral Blouse"],
    bottoms: ["Blue Jeans", "Black Skirt", "White Trousers"],
    accessories: ["Gold Earrings", "Leather Belt", "Silk Scarf"],
    shoes: ["Sneakers", "Heels", "Boots"]
};

// Sample filters and profile data (to be loaded from localStorage)
let userProfile = JSON.parse(localStorage.getItem('userProfile')) || {
    season: "summer", // or "winter"
    occasion: "casual", // "formal", "party"
    style: "minimalist",
    bodyType: "hourglass", // Example: "hourglass", "pear", "rectangle"
    favoriteColors: ["white", "black", "navy"] // Example color preferences
};

// Outfit generation logic
function generateOutfits() {
    const outfits = [];

    wardrobe.tops.forEach(top => {
        wardrobe.bottoms.forEach(bottom => {
            outfits.push({
                top,
                bottom,
                accessories: getRandomAccessory(),
                shoes: getRandomShoe()
            });
        });
    });

    return outfits;
}

function getRandomAccessory() {
    return wardrobe.accessories[Math.floor(Math.random() * wardrobe.accessories.length)];
}

function getRandomShoe() {
    return wardrobe.shoes[Math.floor(Math.random() * wardrobe.shoes.length)];
}

// Filter outfits based on user preferences
function filterOutfits(outfits, preferences) {
    return outfits.filter(o => {
        // Apply style and occasion-based filtering
        let isValidStyle = o.top.toLowerCase().includes(preferences.style) || o.bottom.toLowerCase().includes(preferences.style);
        let isValidSeason = preferences.season === "summer" && (o.top.includes("Shirt") || o.bottom.includes("Jeans"));
        let isValidOccasion = preferences.occasion === "casual" || preferences.occasion === "formal";

        return isValidStyle && isValidSeason && isValidOccasion;
    });
}

// Smart suggestions based on profile data (body type, colors, missing items)
function generateSuggestions() {
    const suggestions = [];

    // Check body type for fitting suggestions
    if (userProfile.bodyType === "hourglass") {
        suggestions.push("Try form-fitting tops that accentuate your waist.");
    } else if (userProfile.bodyType === "pear") {
        suggestions.push("Consider A-line skirts to balance your proportions.");
    }

    // Color suggestions based on preferences
    if (!wardrobe.tops.some(top => userProfile.favoriteColors.some(color => top.toLowerCase().includes(color)))) {
        suggestions.push("Add tops in your favorite colors, like white, black, or navy.");
    }

    // Check if formal items are missing
    if (!wardrobe.tops.some(top => top.toLowerCase().includes("blouse"))) {
        suggestions.push("Consider adding a formal blouse to your wardrobe.");
    }

    // Seasonal items check (e.g., add summer or winter-specific pieces)
    if (userProfile.season === "summer" && !wardrobe.tops.some(top => top.toLowerCase().includes("tank"))) {
        suggestions.push("Add a neutral tank top for layering in summer.");
    }

    // Check for versatility of bottoms
    if (wardrobe.bottoms.length < 3) {
        suggestions.push("Consider buying more versatile bottoms for different occasions.");
    }

    return suggestions;
}

// Render output (pseudo rendering to console — replace with DOM manipulation)
const outfits = filterOutfits(generateOutfits(), userProfile);
console.log("Suggested Outfits:", outfits);
console.log("Smart Suggestions:", generateSuggestions());
