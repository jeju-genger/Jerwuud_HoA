const zodiacData = [
    {
        name: "Aries",
        symbol: "Ram",
        element: "Fire",
        modality: "Cardinal",
        ruling_planet: "Mars",
        personality_traits: "Bold, Energetic, Impulsive",
        strengths: "Courageous, Confident, Passionate",
        weaknesses: "Impatient, Aggressive, Short-tempered",
        compatible_signs: "Leo, Sagittarius, Gemini"
    },
    {
        name: "Taurus",
        symbol: "Bull",
        element: "Earth",
        modality: "Fixed",
        ruling_planet: "Venus",
        personality_traits: "Reliable, Patient, Stubborn",
        strengths: "Loyal, Stable, Hardworking",
        weaknesses: "Possessive, Stubborn, Lazy",
        compatible_signs: "Virgo, Capricorn, Cancer"
    },
    {
        name: "Gemini",
        symbol: "Twins",
        element: "Air",
        modality: "Mutable",
        ruling_planet: "Mercury",
        personality_traits: "Witty, Adaptable, Curious",
        strengths: "Intelligent, Sociable, Versatile",
        weaknesses: "Inconsistent, Indecisive, Superficial",
        compatible_signs: "Libra, Aquarius, Aries"
    },
    {
        name: "Cancer",
        symbol: "Crab",
        element: "Water",
        modality: "Cardinal",
        ruling_planet: "Moon",
        personality_traits: "Emotional, Intuitive, Protective",
        strengths: "Loyal, Caring, Creative",
        weaknesses: "Moody, Overly Sensitive, Clingy",
        compatible_signs: "Scorpio, Pisces, Taurus"
    },
    {
        name: "Leo",
        symbol: "Lion",
        element: "Fire",
        modality: "Fixed",
        ruling_planet: "Sun",
        personality_traits: "Confident, Charismatic, Dramatic",
        strengths: "Warm-hearted, Generous, Natural Leader",
        weaknesses: "Arrogant, Stubborn, Attention-seeking",
        compatible_signs: "Aries, Sagittarius, Gemini"
    },
    {
        name: "Virgo",
        symbol: "Maiden",
        element: "Earth",
        modality: "Mutable",
        ruling_planet: "Mercury",
        personality_traits: "Practical, Analytic, Detail-Oriented",
        strengths: "Hardworking, Loyal, Intelligent",
        weaknesses: "Overly Critical, Worry-Prone, Shy",
        compatible_signs: "Taurus, Capricorn, Cancer"
    },
    {
        name: "Libra",
        symbol: "Scales",
        element: "Air",
        modality: "Cardinal",
        ruling_planet: "Venus",
        personality_traits: "Diplomatic, Charming, Balanced",
        strengths: "Fair-minded, Social, Peaceful",
        weaknesses: "Indecisive, Avoids Confrontation, Superficial",
        compatible_signs: "Gemini, Aquarius, Leo"
    },
    {
        name: "Scorpio",
        symbol: "Scorpion",
        element: "Water",
        modality: "Fixed",
        ruling_planet: "Pluto, Mars",
        personality_traits: "Intense, Mysterious, Passionate",
        strengths: "Brave, Loyal, Determined",
        weaknesses: "Jealous, Secretive, Manipulative",
        compatible_signs: "Cancer, Pisces, Virgo"
    },
    {
        name: "Sagittarius",
        symbol: "Archer",
        element: "Fire",
        modality: "Mutable",
        ruling_planet: "Jupiter",
        personality_traits: "Adventurous, Optimistic, Independent",
        strengths: "Open-minded, Funny, Freedom-loving",
        weaknesses: "Impulsive, Blunt, Restless",
        compatible_signs: "Aries, Leo, Libra"
    },
    {
        name: "Capricorn",
        symbol: "Goat",
        element: "Earth",
        modality: "Cardinal",
        ruling_planet: "Saturn",
        personality_traits: "Discipline, Ambitious, Responsible",
        strengths: "Hardworking, Patient, Determined",
        weaknesses: "Cold, Workaholic, Pessimistic",
        compatible_signs: "Taurus, Virgo, Scorpio"
    },
    {
        name: "Aquarius",
        symbol: "Water Bearer",
        element: "Air",
        modality: "Fixed",
        ruling_planet: "Uranus, Saturn",
        personality_traits: "Unique, Intellectual, Humanitarian",
        strengths: "Innovative, Open-minded, Visionary",
        weaknesses: "Aloof, Rebellious, Unpredictable",
        compatible_signs: "Gemini, Libra, Sagittarius"
    },
    {
        name: "Pisces",
        symbol: "Fish",
        element: "Water",
        modality: "Mutable",
        ruling_planet: "Neptune, Jupiter",
        personality_traits: "Dreamy, Compassionate, Artistic",
        strengths: "Empathetic, Intuitive, Romantic",
        weaknesses: "Escapist, Overly Emotional, Indecisive",
        compatible_signs: "Cancer, Scorpio, Capricorn"
    }
];

const zodiacSection = document.getElementById("zodiacSection");
const searchInput = document.getElementById("searchInput");
const zodiacBody = document.getElementById("zodiacBody");
const noResults = document.getElementById("noResults");

function renderZodiacs(data) {
  zodiacBody.innerHTML = "";

  if (data.length === 0) {
    zodiacSection.style.display = "none";
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";
  zodiacSection.style.display = "block";

  data.forEach(zodiac => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${zodiac.name}</td>
      <td>${zodiac.symbol}</td>
      <td>${zodiac.element}</td>
      <td>${zodiac.modality}</td>
      <td>${zodiac.ruling_planet}</td>
      <td>${zodiac.personality_traits}</td>
      <td>${zodiac.strengths}</td>
      <td>${zodiac.weaknesses}</td>
      <td>${zodiac.compatible_signs}</td>
    `;

    zodiacBody.appendChild(row);
  });
}

document.getElementById("searchButton").addEventListener("click", () => {
  const query = searchInput.value.toLowerCase().trim();

  if (query === "") {
    zodiacBody.innerHTML = "";
    zodiacSection.style.display = "none";
    noResults.style.display = "none";
    return;
  }

  const filtered = zodiacData.filter(zodiac =>
    Object.values(zodiac).some(value =>
      value.toLowerCase().includes(query)
    )
  );

  renderZodiacs(filtered);
});
