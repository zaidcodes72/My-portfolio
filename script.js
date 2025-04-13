function button(section) {
  let buttonColor1 = document.getElementById("activeprojects");
  let buttonColor2 = document.getElementById("activeskills");

  if (section === "activeprojects") {
    buttonColor1.style.backgroundColor = "#616060";
    buttonColor1.style.borderRadius = "0.75rem";
    buttonColor2.style.backgroundColor = "";
  } else if (section === "activeskills") {
    buttonColor2.style.backgroundColor = "#616060";
    buttonColor2.style.borderRadius = "0.75rem";
    buttonColor1.style.backgroundColor = "";
  }
}

function toggleSection(section) {
  const projectSection = document.getElementById("projects");
  const skillSection = document.getElementById("skills");

  if (section === "projects") {
    projectSection.style.display = "grid";
    skillSection.style.display = "none";
  } else if (section === "skills") {
    projectSection.style.display = "none";
    skillSection.style.display = "grid";
  }
}
