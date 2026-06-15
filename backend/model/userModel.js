
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  cartData: {
    type: Object,
    default: {}
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review"
    }
  ],
  resetOtp: {
    type: String
  },
  otpExpires: {
    type: Date
  },
  isOtpVerifed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true, minimize: false });

const User = mongoose.model("User", userSchema);
export default User;

// By default, Mongoose removes (minimizes) empty objects from documents before saving.
// Minimize is important for fields like cartData, where we may want to store an empty object initially (so later we can add items inside it).

