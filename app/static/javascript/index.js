const comp = document.getElementById("comp");
const inch = document.getElementById("inch");
const type = document.getElementById("type");
const cpu = document.getElementById("cpu");

const options = {
  Gaming: {
    inch: [14, 15, 17],
    type: ["Gaming"],
    cpu: ["Core i5", "Core i7", "Ryzen 5", "Ryzen 7"],
  },
  other: {
    inch: [11, 13, 14, 15, 17],
    type: ["Notebook", "Ultrabook", "2 in 1", "Workstation", "Gaming"],
    cpu: ["Core i3", "Core i5", "Core i7", "Ryzen 3", "Ryzen 5", "Ryzen 7"],
  },
};

function update() {
  inch.innerHTML = "";
  type.innerHTML = "";
  cpu.innerHTML = "";
  if (
    comp.value == "ROG" ||
    comp.value == "MSI" ||
    comp.value == "Predator" ||
    comp.value == "Alienware"
  ) {
    options["Gaming"].inch.forEach(
      (e) => (inch.innerHTML += `<option value="${e}">${e}</option>`)
    );
    options["Gaming"].type.forEach(
      (e) => (type.innerHTML += `<option value="${e}">${e}</option>`)
    );
    options["Gaming"].cpu.forEach(
      (e) => (cpu.innerHTML += `<option value="${e}">${e}</option>`)
    );
  } else {
    options["other"].inch.forEach(
      (e) => (inch.innerHTML += `<option value="${e}">${e}</option>`)
    );
    options["other"].type.forEach(
      (e) => (type.innerHTML += `<option value="${e}">${e}</option>`)
    );
    options["other"].cpu.forEach(
      (e) => (cpu.innerHTML += `<option value="${e}">${e}</option>`)
    );
  }
}

comp.addEventListener("change", update);
update();
