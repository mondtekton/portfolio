export default function scrollToSection(sectionID, offset = 180) {
  const section = document.getElementById(sectionID);

  const bodyTop = document.body.getBoundingClientRect().top;
  const targetTop = section.getBoundingClientRect().top;

  const targetOffset = targetTop - bodyTop - offset;

  window.scrollTo({
    top: targetOffset,
    behavior: "smooth",
  });
}
