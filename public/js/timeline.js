const foundersArray = [
  {
    born: 1916,
    died: 2009,
    company: "Price Club",
    name: "Sol Price",
    photo: "/img/sol-price.jpg",
    attributes: {
      childhood: "Childhood:",
      personalityTraits: "Personality Traits:",
      businessPractices: "Business Practices:",
      uniqueStrategies: "Unique Strategies:",
      legacy: "Legacy:",
    },
  },
  {
    born: 1920,
    died: 2010,
    company: "Price Club",
    name: "Sol Price",
    photo: "/img/sol-price.jpg",
    attributes: {
      childhood: "Childhood:",
      personalityTraits: "Personality Traits:",
      businessPractices: "Business Practices:",
      uniqueStrategies: "Unique Strategies:",
      legacy: "Legacy:",
    },
  },
  {
    born: 1934,
    died: 2001,
    company: "Price Club",
    name: "Sol Price",
    photo: "/img/sol-price.jpg",
    attributes: {
      childhood: "Childhood:",
      personalityTraits: "Personality Traits:",
      businessPractices: "Business Practices:",
      uniqueStrategies: "Unique Strategies:",
      legacy: "Legacy:",
    },
  },
  {
    born: 1902,
    died: 2000,
    company: "Price Club",
    name: "Sol Price",
    photo: "/img/sol-price.jpg",
    attributes: {
      childhood: "Childhood:",
      personalityTraits: "Personality Traits:",
      businessPractices: "Business Practices:",
      uniqueStrategies: "Unique Strategies:",
      legacy: "Legacy:",
    },
  },
  {
    born: 1978,
    died: 2023,
    company: "Price Club",
    name: "Sol Price",
    photo: "/img/sol-price.jpg",
    attributes: {
      childhood: "Childhood:",
      personalityTraits: "Personality Traits:",
      businessPractices: "Business Practices:",
      uniqueStrategies: "Unique Strategies:",
      legacy: "Legacy:",
    },
  },
  {
    born: 1980,
    died: 2020,
    company: "Price Club",
    name: "Sol Price",
    photo: "/img/sol-price.jpg",
    attributes: {
      childhood: "Childhood:",
      personalityTraits: "Personality Traits:",
      businessPractices: "Business Practices:",
      uniqueStrategies: "Unique Strategies:",
      legacy: "Legacy:",
    },
  },
];

const timeline = document.getElementById("founders-timeline");

foundersArray.forEach((founder) => {
  const founderCard = document.createElement("div");
  founderCard.classList.add("founder-card");

  const timelinePoint = document.createElement("div");
  timelinePoint.classList.add("timeline-point");

  const founderPhoto = document.createElement("img");
  founderPhoto.classList.add("founder-photo");
  founderPhoto.src = founder.photo;
  founderPhoto.alt = founder.name;

  const founderName = document.createElement("div");
  founderName.classList.add("founder-name");
  founderName.textContent = founder.name;

  const founderCompany = document.createElement("div");
  founderCompany.classList.add("founder-company");
  founderCompany.textContent = founder.company;

  const founderYearsAlive = document.createElement("div");
  founderYearsAlive.classList.add("founder-years-alive");
  const yearsAlive = founder.died - founder.born;
  founderYearsAlive.textContent = `${founder.born} - ${founder.died} (${yearsAlive})`;

  const founderDetails = document.createElement("div");
  for (const key in founder.attributes) {
    const attribute = document.createElement("div");
    attribute.innerHTML = `<strong>${founder.attributes[key]}</strong> Some details...`; // Replace "Some details..." with actual details
    founderDetails.appendChild(attribute);
  }

  founderCard.appendChild(timelinePoint);
  founderCard.appendChild(founderPhoto);
  founderCard.appendChild(founderName);
  founderCard.appendChild(founderCompany);
  founderCard.appendChild(founderYearsAlive);
  founderCard.appendChild(founderDetails);

  timeline.appendChild(founderCard);
});
