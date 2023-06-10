import User from "../model/userModel.js";
import {Event} from "../model/eventSchema.js";

export const favorites = {
  addFavorite: async (req, res) => {
    try {
      const userId = req.params.userId; // Kullanıcının kimliği
      const eventId = req.params.eventId; // Favori olarak eklenmek istenen etkinliğin kimliği

      const user = await User.findById(userId);
      console.log(user);
      if (!user) {
        return res.status(404).json({ error: "Kullanıcı bulunamadı" });
      }

      const event = await Event.findById(eventId);
      if (!event) {
        return res.status(404).json({ error: "Etkinlik bulunamadı" });
      }

      // Etkinlik zaten favori olarak eklenmişse işlemi tekrarlamayın
      if (user.favorites.includes(eventId)) {
        return res.status(400).json({ error: "Etkinlik zaten favorilere eklenmiş" });
      }

      user.favorites.push(eventId);
      await user.save();

      res.json({ message: "Etkinlik favorilere eklendi" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  listFavorites: async (req, res) => {
    try {
      const userId = req.params.userId; // Kullanıcının kimliği
      const user = await User.findById(userId).populate("favorites");
      if (!user) {
        return res.status(404).json({ error: "Kullanıcı bulunamadı" });
      }

      res.json(user.favorites);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

