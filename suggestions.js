// Sample wardrobe items (would come from user-uploaded data in real use)
const wardrobe = {
    tops: ["White Shirt", "Black Turtleneck", "Floral Blouse"],
    bottoms: ["Blue Jeans", "Black Skirt", "White Trousers"],
    accessories: ["Gold Earrings", "Leather Belt", "Silk Scarf"],
    shoes: ["Sneakers", "Heels", "Boots"]
};

// Sample filters
const userPreferences = {
    season: "summer", // or "winter"
    occasion: "casual", // "formal", "party"
    style: "minimalist"
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

// Filter outfits
function filterOutfits(outfits, preferences) {
    // Dummy logic: real logic would match colors, fabrics, etc.
    return outfits.filter(o => {
        return preferences.occasion === "casual" || preferences.season === "summer"; 
    });
}

// Smart suggestions
function generateSuggestions() {
    const suggestions = [];

    if (!wardrobe.tops.includes("Neutral Tank Top")) {
        suggestions.push("Add a Neutral Tank Top for layering.");
    }
    if (wardrobe.bottoms.length < 2) {
        suggestions.push("Consider buying more versatile bottoms.");
    }
    if (wardrobe.tops.length > 10) {
        suggestions.push("Declutter rarely worn tops.");
    }

    return suggestions;
}

// Render output (pseudo rendering to console — replace with DOM manipulation)
const outfits = filterOutfits(generateOutfits(), userPreferences);
console.log("Suggested Outfits:", outfits);
console.log("Smart Suggestions:", generateSuggestions());
