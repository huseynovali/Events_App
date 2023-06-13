import User from "../model/userModel.js";
import {Event} from "../model/eventSchema.js";

export const favorites = {
  addFavorite: async (req, res) => {
    try {
      const userId = req.params.userId;
      const eventId = req.params.eventId; 

      const user = await User.findById(userId);
      console.log(user);
      if (!user) {
        return res.status(404).json({ error: "istifadəçi tapılmadı" });
      }

      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).json({ error: "Tədbir yoxdur !" });
      }

      // Etkinlik zaten favori olarak eklenmişse işlemi tekrarlamayın
      if (user.favorites.includes(eventId)) {
        return res.status(400).json({ error: "Tədbir artıq əlavə edilib !" });
      }

      user.favorites.push(eventId);
      await user.save();

      res.json({ message: "Tədbir  əlavə edilidi !" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  listFavorites: async (req, res) => {
    try {
      const userId = req.params.userId; // Kullanıcının kimliği
      const user = await User.findById(userId).populate("favorites");
      if (!user) {
        return res.status(404).json({ error: "İstifadəçi tapılmadı !" });
      }

      res.json(user.favorites);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

