// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');

// const app = express();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/agriculture', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('Failed to connect to MongoDB:', err.message);
// });

// // Enable Mongoose debugging
// mongoose.set('debug', true);

// // Register Schema and Model
// const RegisterSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true, required: true },
//   password: String,
//   isAdmin: { type: Boolean, default: false },
// });

// const RegisterModel = mongoose.model('registers', RegisterSchema);

// // Vehicle Schema and Model
// const vehicleSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
// });

// const Vehicle = mongoose.model('Vehicle', vehicleSchema);

// // Implement Schema and Model
// const implementSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   price: { type: Number, required: true },
// });

// const Implement = mongoose.model('Implement', implementSchema);

// // Booking Schema and Model
// const BookingSchema = new mongoose.Schema({
//   name: String,
//   date: Date,
//   email: String,
//   phone: String,
//   vehicle: String,
//   implement: String,
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'registers' },
//   status: String,
// });

// const BookingModel = mongoose.model('bookings', BookingSchema);

// // Payment Schema and Model
// const PaymentSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'registers' },
//   amount: Number,
//   date: Date,
//   method: String,
//   transactionId: String, // Added for transaction ID
//   photo: String, // Store the path to the uploaded photo if needed
// });

// const PaymentModel = mongoose.model('payments', PaymentSchema);

// // Register route
// app.post('/register', async (req, res) => {
//   try {
//     const { name, email, password, isAdmin } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new RegisterModel({
//       name,
//       email,
//       password: hashedPassword,
//       isAdmin: isAdmin || false,
//     });

//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (err) {
//     console.error('Error during registration:', err.message);
//     res.status(500).json({ error: 'Error during registration', details: err.message });
//   }
// });

// // Login route
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await RegisterModel.findOne({ email });

//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (isMatch) {
//       res.json({ message: 'success', isAdmin: user.isAdmin });
//     } else {
//       res.status(401).json({ message: 'Incorrect password' });
//     }
//   } catch (err) {
//     console.error('Error during login:', err.message);
//     res.status(500).json({ error: 'Error during login', details: err.message });
//   }
// });

// // Route to create a new booking
// app.post('/book', async (req, res) => {
//   try {
//     const { name, date, email, phone, vehicle, implement, userId } = req.body;

//     const existingBooking = await BookingModel.findOne({ date, user: userId });
    
//     if (existingBooking) {
//       return res.status(409).json({ error: 'Booking already registered on the same date' });
//     }

//     const newBooking = new BookingModel({
//       name,
//       date,
//       email,
//       phone,
//       vehicle,
//       implement,
//       user: userId,
//       status: 'Pending',
//     });

//     await newBooking.save();
//     res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
//   } catch (err) {
//     console.error('Error during booking creation:', err.message);
//     res.status(500).json({ error: 'Error during booking creation', details: err.message });
//   }
// });

// // Route to create a new vehicle
// app.post('/vehicles', async (req, res) => {
//   const { name, price } = req.body;

//   try {
//     const newVehicle = new Vehicle({ name, price });
//     await newVehicle.save();
//     res.status(201).json({ message: 'Vehicle added successfully', vehicle: newVehicle });
//   } catch (err) {
//     console.error('Error adding vehicle:', err.message);
//     res.status(500).json({ error: 'Error adding vehicle', details: err.message });
//   }
// });

// // Route to fetch all vehicles
// app.get('/vehicles', async (req, res) => {
//   try {
//     const vehicles = await Vehicle.find();
//     res.json(vehicles);
//   } catch (err) {
//     console.error('Error fetching vehicles:', err.message);
//     res.status(500).json({ error: 'Error fetching vehicles', details: err.message });
//   }
// });

// // Route to update vehicle details
// app.put('/vehicles/:id', async (req, res) => {
//   const { name, price } = req.body;

//   try {
//     const updatedVehicle = await Vehicle.findByIdAndUpdate(
//       req.params.id,
//       { name, price },
//       { new: true }
//     );

//     if (!updatedVehicle) {
//       return res.status(404).json({ message: 'Vehicle not found' });
//     }

//     res.json(updatedVehicle);
//   } catch (err) {
//     console.error('Error updating vehicle:', err.message);
//     res.status(500).json({ error: 'Error updating vehicle', details: err.message });
//   }
// });

// // Route to delete a vehicle
// app.delete('/vehicles/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedVehicle = await Vehicle.findByIdAndDelete(id);

//     if (!deletedVehicle) {
//       return res.status(404).json({ message: 'Vehicle not found' });
//     }

//     res.json({ message: 'Vehicle deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting vehicle:', err.message);
//     res.status(500).json({ error: 'Error deleting vehicle', details: err.message });
//   }
// });

// // Route to fetch all users
// app.get('/users', (req, res) => {
//   RegisterModel.find()
//     .then((users) => {
//       res.json(users);
//     })
//     .catch((err) => {
//       console.error('Error fetching users:', err.message);
//       res.status(500).json({ error: 'Error fetching users', details: err.message });
//     });
// });

// // Route to fetch all bookings
// app.get('/bookings', (req, res) => {
//   BookingModel.find()
//     .populate('user', 'name') // Populate user field with user name
//     .then((bookings) => {
//       res.json(bookings);
//     })
//     .catch((err) => {
//       console.error('Error fetching bookings:', err.message);
//       res.status(500).json({ error: 'Error fetching bookings', details: err.message });
//     });
// });

// // Route to fetch all payment details
// app.get('/payments', (req, res) => {
//   PaymentModel.find()
//     .populate('userId', 'name') // Populate userId field with user name
//     .then((payments) => {
//       res.json(payments);
//     })
//     .catch((err) => {
//       console.error('Error fetching payments:', err.message);
//       res.status(500).json({ error: 'Error fetching payments', details: err.message });
//     });
// });

// // Route to create a new payment
// app.post('/payments', async (req, res) => {
//   try {
//     const { userId, amount, method, transactionId, photo } = req.body;

//     const newPayment = new PaymentModel({
//       userId,
//       amount,
//       date: new Date(),
//       method,
//       transactionId,
//       photo // Assuming you've handled the file upload appropriately
//     });

//     await newPayment.save();
//     res.status(201).json({ message: 'Payment recorded successfully', payment: newPayment });
//   } catch (err) {
//     console.error('Error during payment creation:', err.message);
//     res.status(500).json({ error: 'Error during payment creation', details: err.message });
//   }
// });

// // Route to update a booking
// app.put('/bookings/:id', async (req, res) => {
//   const { id } = req.params;
//   const { name, date, email, phone, vehicle, implement, status } = req.body;

//   try {
//     const updatedBooking = await BookingModel.findByIdAndUpdate(
//       id,
//       { name, date, email, phone, vehicle, implement, status },
//       { new: true }
//     );

//     if (!updatedBooking) {
//       return res.status(404).json({ message: 'Booking not found' });
//     }

//     res.json(updatedBooking);
//   } catch (err) {
//     console.error('Error updating booking:', err.message);
//     res.status(500).json({ error: 'Error updating booking', details: err.message });
//   }
// });

// // Route to delete a booking
// app.delete('/bookings/:id', async (req, res) => {
//   const { id } = req.params;

//   try {
//     const deletedBooking = await BookingModel.findByIdAndDelete(id);

//     if (!deletedBooking) {
//       return res.status(404).json({ message: 'Booking not found' });
//     }

//     res.json({ message: 'Booking deleted successfully' });
//   } catch (err) {
//     console.error('Error deleting booking:', err.message);
//     res.status(500).json({ error: 'Error deleting booking', details: err.message });
//   }
// });

// // Start server
// const PORT = process.env.PORT || 3001;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





//login and register,delete not working bellow code 





const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const multer = require('multer'); // Import multer
const path = require('path');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files from 'uploads' directory (where we'll save uploaded files)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/agriculture', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Failed to connect to MongoDB:', err.message);
});

// Enable Mongoose debugging
mongoose.set('debug', true);

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

const upload = multer({ storage });

// Register Schema and Model
const RegisterSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
});

const RegisterModel = mongoose.model('registers', RegisterSchema);

// Vehicle Schema and Model
const vehicleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

// Implement Schema and Model
const implementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const Implement = mongoose.model('Implement', implementSchema);

// Booking Schema and Model
const BookingSchema = new mongoose.Schema({
  name: String,
  date: Date,
  email: String,
  phone: String,
  vehicle: String,
  implement: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'registers' },
  status: String,
});

const BookingModel = mongoose.model('bookings', BookingSchema);

// Payment Schema and Model
const PaymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'registers' },
  amount: Number,
  date: Date,
  method: String,
  transactionId: String, // Added for transaction ID
  photo: String, // Store the path to the uploaded photo if needed
  name: String,
  email: String,
  phnum: String,
  landmark: String,
});

const PaymentModel = mongoose.model('payments', PaymentSchema);

// Register route
app.post('/register', async (req, res) => {
  try {
    const { name, email, password, isAdmin } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new RegisterModel({
      name,
      email,
      password: hashedPassword,
      isAdmin: isAdmin || false,
    });

    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error during registration:', err.message);
    res.status(500).json({ error: 'Error during registration', details: err.message });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await RegisterModel.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ message: 'success', isAdmin: user.isAdmin });
    } else {
      res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).json({ error: 'Error during login', details: err.message });
  }
});

// // Route to create a new booking
// app.post('/book', async (req, res) => {
//   try {
//     const { name, date, email, phone, vehicle, implement, userId } = req.body;

//     const existingBooking = await BookingModel.findOne({ date, user: userId });
    
//     if (existingBooking) {
//       return res.status(409).json({ error: 'Booking already registered on the same date' });
//     }

//     const newBooking = new BookingModel({
//       name,
//       date,
//       email,
//       phone,
//       vehicle,
//       implement,
//       user: userId,
//       status: 'Pending',
//     });

//     await newBooking.save();
//     res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
//   } catch (err) {
//     console.error('Error during booking creation:', err.message);
//     res.status(500).json({ error: 'Error during booking creation', details: err.message });
//   }
// });

// Route to create a new booking
app.post('/book', async (req, res) => {
  try {
    const { name, date, email, phone, vehicle, implement, userId } = req.body;

    // No more validation for existing booking on the same date
    const newBooking = new BookingModel({
      name,
      date,
      email,
      phone,
      vehicle,
      implement,
      user: userId,
      status: 'Pending',
    });

    await newBooking.save();
    res.status(201).json({ message: 'Booking created successfully', booking: newBooking });
  } catch (err) {
    console.error('Error during booking creation:', err.message);
    res.status(500).json({ error: 'Error during booking creation', details: err.message });
  }
});


// Route to create a new vehicle
app.post('/vehicles', async (req, res) => {
  const { name, price } = req.body;

  try {
    const newVehicle = new Vehicle({ name, price });
    await newVehicle.save();
    res.status(201).json({ message: 'Vehicle added successfully', vehicle: newVehicle });
  } catch (err) {
    console.error('Error adding vehicle:', err.message);
    res.status(500).json({ error: 'Error adding vehicle', details: err.message });
  }
});

// Route to fetch all vehicles
app.get('/vehicles', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json(vehicles);
  } catch (err) {
    console.error('Error fetching vehicles:', err.message);
    res.status(500).json({ error: 'Error fetching vehicles', details: err.message });
  }
});

// Route to update vehicle details
app.put('/vehicles/:id', async (req, res) => {
  const { name, price } = req.body;

  try {
    const updatedVehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      { name, price },
      { new: true }
    );

    if (!updatedVehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    res.json(updatedVehicle);
  } catch (err) {
    console.error('Error updating vehicle:', err.message);
    res.status(500).json({ error: 'Error updating vehicle', details: err.message });
  }
});

// Route to delete a vehicle
app.delete('/vehicles/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deletedVehicle = await Vehicle.findByIdAndDelete(id);

    if (!deletedVehicle) {
      return res.status(404).json({ message: 'Vehicle not found' });
    }

    res.json({ message: 'Vehicle deleted successfully' });
  } catch (err) {
    console.error('Error deleting vehicle:', err.message);
    res.status(500).json({ error: 'Error deleting vehicle', details: err.message });
  }
});

// Route to fetch all users
app.get('/users', (req, res) => {
  RegisterModel.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.error('Error fetching users:', err.message);
      res.status(500).json({ error: 'Error fetching users', details: err.message });
    });
});

// Route to fetch all bookings
app.get('/bookings', (req, res) => {
  BookingModel.find()
    .populate('user', 'name') // Populate user field with user name
    .then((bookings) => {
      res.json(bookings);
    })
    .catch((err) => {
      console.error('Error fetching bookings:', err.message);
      res.status(500).json({ error: 'Error fetching bookings', details: err.message });
    });
});

// Route to fetch all payment details
app.get('/payments', (req, res) => {
  PaymentModel.find()
    .populate('userId', 'name email phone landmark') // Populate userId field with user name
    .then((payments) => {
      res.json(payments);
    })
    .catch((err) => {
      console.error('Error fetching payments:', err.message);
      res.status(500).json({ error: 'Error fetching payments', details: err.message });
    });
});

app.delete('/bookings/:id', async (req, res) => {
  try {
      const booking = await BookingModel.findByIdAndDelete(req.params.id);
      if (!booking) {
          return res.status(404).json({ message: 'Booking not found' });
      }
      res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
  }
});


// Route to create a new payment
app.post('/payments', upload.single('photo'), async (req, res) => {
  try {
    const { userId, amount, method, transactionId, name, email, phnum, landmark } = req.body;

    const newPayment = new PaymentModel({
      userId,
      amount,
      date: new Date(),
      method,
      transactionId,
      photo: req.file ? req.file.path : null, // Save the path to the uploaded photo
      name, // Include name from the form
      email, // Include email from the form
      phnum, // Include phone number from the form
      landmark, // Include landmark from the form
    });

    await newPayment.save();
    res.status(201).json({ message: 'Payment created successfully', payment: newPayment });
  } catch (err) {
    console.error('Error during payment creation:', err.message);
    res.status(500).json({ error: 'Error during payment creation', details: err.message });
  }
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
