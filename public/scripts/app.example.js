class App {
  constructor() {
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.jumlahPenumpang = document.getElementById("jumlah");
    this.tanggal = document.getElementById("tanggal")
    this.waktuJemput = document.getElementById("waktu");
    this.tipeDriver = document.getElementById("tipe");
  }

  async init() {
    this.showCars;
    this.loadButton.onclick = this.showCars;
    document.addEventListener('DOMContentLoaded') = this.showCars;
  }

  showCars = async () => {
    this.clear()
    await this.load();
    this.run();
  };

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const cars = await Binar.listCars((data) => {
      const tanggalJemputData = new Date(data.availableAt).getTime()
      const tanggal = new Date(`${this.tanggal.value} ${this.waktuJemput.value}`).getTime()
      return data.capacity >= this.jumlahPenumpang.value &&
      tanggalJemputData >= tanggal &&
      data.available.toString() == this.tipeDriver.value;
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
