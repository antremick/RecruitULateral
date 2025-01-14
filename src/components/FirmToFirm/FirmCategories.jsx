import React, { useState } from "react";

function FirmCategories() {
  // Which categories the user has selected
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Which categories are “expanded” to show firm names
  const [expandedCategories, setExpandedCategories] = useState({});

  // Category data
  const categories = [
    {
      categoryName: "Bulge Bracket Investment Banks (BBs)",
      firms: [
        "JP Morgan",
        "Goldman Sachs",
        "Morgan Stanley",
        "Bank of America",
        "Citi",
        "Barclays",
        "UBS",
        "Deutsche Bank",
      ],
    },
    {
      categoryName: "In-Between-a-Banks (IBABs)",
      firms: [
        "Wells Fargo",
        "RBC",
        "HSBC",
        "BNP Paribas",
        "Mizuho",
        "Nomura",
        "BMO",
        "CITIC",
      ],
    },
    {
      categoryName: "Elite Boutique Investment Banks (EBs)",
      firms: [
        "Centerview",
        "Evercore",
        "Guggenheim",
        "Lazard",
        "Moelis",
        "Perella Weinberg",
        "PJT Partners",
        "Qatalyst",
        "Rothschild",
      ],
    },
    {
      categoryName: "Up-and-Coming Elite Boutique Investment Banks (UCEBs)",
      firms: [
        "LionTree Advisors",
        "Zaoui & Co.",
        "Robey Warshaw",
        "Lakeside Capital Advisers",
        "Dyal Co.",
      ],
    },
    {
      categoryName: "Middle Market Banks (MMs)",
      firms: [
        "Baird",
        "Brown Gibbons Lang & Company",
        "Cowen",
        "Harris Williams",
        "Houlihan Lokey",
        "Janney",
        "Jefferies",
        "JMP",
        "Lincoln International",
        "Macquarie",
        "Needham",
        "Oppenheimer",
        "Piper Sandler",
        "PJ Solomon",
        "Raymond James",
        "Stephens",
        "Stifel",
        "Truist",
        "Wedbush",
        "William Blair",
      ],
    },
    {
      categoryName: "Industry-Specific Boutiques (ISBs)",
      firms: [
        "Leerink",
        "Ziegler",
        "FT Partners",
        "Raine Group",
        "Allen & Co.",
        "Seabury",
        "Telsey Advisory Group",
      ],
    },
    {
      categoryName: "Other Banks (Merchant Banks, Hybrid Firms, and KPOs)",
      firms: [
        "BDT Capital Partners",
        "Tudor Pickering Holt & Co.",
        "Raine Group",
        "Three Ocean Partners",
        "Lepe Partners",
      ],
    },
  ];

  // Toggle whether a category is selected
  const handleSelectCategory = (categoryName) => {
    setSelectedCategories((prev) => {
      // If it’s already selected, remove it
      if (prev.includes(categoryName)) {
        return prev.filter((cat) => cat !== categoryName);
      }
      // Otherwise, add it
      return [...prev, categoryName];
    });
  };

  // Toggle whether a category is expanded to show firm names
  const handleToggleMoreInfo = (categoryName) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  // Called when user clicks the “Continue” button
  const handleContinue = () => {
    // For now, just log the selected categories
    console.log("Selected categories:", selectedCategories);
    // TODO: Make an API call here if needed
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Firm Categories</h1>
      <p style={styles.subtitle}>
        Select any categories you’re interested in. Click “More Info” to see
        example firms in each category.
      </p>

      <div>
        {categories.map((cat) => {
          const isSelected = selectedCategories.includes(cat.categoryName);
          const isExpanded = expandedCategories[cat.categoryName] || false;

          return (
            <div key={cat.categoryName} style={styles.categoryCard}>
              <div style={styles.cardHeader}>
                {/* Big button to select/unselect category */}
                <button
                  style={{
                    ...styles.categoryButton,
                    backgroundColor: isSelected ? "#4a67f2" : "#fff",
                    color: isSelected ? "#fff" : "#333",
                  }}
                  onClick={() => handleSelectCategory(cat.categoryName)}
                >
                  {isSelected ? "Selected" : "Select"}: {cat.categoryName}
                </button>

                {/* Button to toggle the “more info” about the category */}
                <button
                  style={styles.infoButton}
                  onClick={() => handleToggleMoreInfo(cat.categoryName)}
                >
                  {isExpanded ? "Hide Info" : "More Info"}
                </button>
              </div>

              {/* Conditionally render the list of firms if expanded */}
              {isExpanded && (
                <ul style={styles.firmList}>
                  {cat.firms.map((firm) => (
                    <li key={firm} style={styles.firmItem}>
                      {firm}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          );
        })}
      </div>

      <button style={styles.continueButton} onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "0.5rem",
  },
  subtitle: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#555",
  },
  categoryCard: {
    marginBottom: "1.5rem",
    border: "1px solid #ddd",
    borderRadius: "6px",
    padding: "1rem",
    backgroundColor: "#fff",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.75rem",
  },
  categoryButton: {
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: 500,
    flex: 1,
    marginRight: "1rem",
    transition: "background-color 0.2s ease",
  },
  infoButton: {
    padding: "0.75rem 1rem",
    fontSize: "0.9rem",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
  },
  firmList: {
    listStyle: "disc",
    marginLeft: "1.5rem",
  },
  firmItem: {
    marginBottom: "0.25rem",
  },
  continueButton: {
    display: "block",
    margin: "2rem auto 0",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#4a67f2",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: 500,
  },
};

export default FirmCategories;
