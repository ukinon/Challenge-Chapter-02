class App {
  constructor() {
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.jumlahInput = document.getElementById("jumlah");
  }

  async init() {
    this.loadButton.onclick = this.showCars;
  }

  showCars = async () => {
    const val = parseInt(this.jumlahInput.value);
    this.clear()
    await this.load(val);
    this.run();
  };

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load(value) {
    const cars = await Binar.listCars((car) => {
      return car.capacity == value && car.available == true;
    });
    Car.init(cars);
  }

  clear = () => {
    while (this.carContainerElement.firstChild) {
      this.carContainerElement.removeChild(this.carContainerElement.firstChild);
    }
  };
}

const app = new App();
app.init();
