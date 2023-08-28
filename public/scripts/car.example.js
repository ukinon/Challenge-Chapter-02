class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <div class="card" style="width: 20rem;"> 
    <img style="width:100%; height:200px;" class="card-img-top object-fit-cover" src="${this.image}" alt="Card image cap"> 
    <div class="card-body d-flex flex-column gap-3"> 
    <h5 style="font-size: 14px; font-weight: bold;"> ${this.model} / ${this.type}
    </h5> 
    <h3 style="font-size:16px; font-weight: bolder;" class="card-title">Rp ${this.rentPerDay} / hari</h3> 
    <p style="font-size:14px; height: 60px" class="card-text">${this.description}</p> 

    <div class="d-flex flex-row gap-2 align-items-center">
    <i data-feather="users" class="opacity-50"></i>
    <p style="font-size:14px;" class="card-text">${this.capacity} Orang</p> 
    </div>

    <div class="d-flex flex-row gap-2 align-items-center">
    <i data-feather="settings" class="opacity-50"></i>
    <p style="font-size:14px;" class="card-text">${this.transmission}</p> 
    </div>

    <div class="d-flex flex-row gap-2 align-items-center">
    <i data-feather="calendar" class="opacity-50"></i>
    <p style="font-size:14px;" class="card-text">Tahun ${this.year}</p> 
    </div>
    <a href="#" class="btn rounded-1 w-100" style="background-color: #5CB85F; color: white">Pilih Mobil</a> 
     </div> 
     </div>
    `;
  }
}
