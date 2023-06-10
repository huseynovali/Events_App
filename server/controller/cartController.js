import Cart from "../model/cartModel.js";

export const cartController = {
  getCartByUserId: async (req, res) => {
    try {
      const userId = req.params.userId;
      const cart = await Cart.findOne({ userId }).populate("items.eventId");
      if (!cart) {
        return res.status(404).json({ error: "Sepet bulunamadı" });
      }
      res.json(cart);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  addToCart: async (req, res) => {
    try {
      //const userId = req.params.;
      const { userId, seatId ,eventId} = req.body;

      const cart = await Cart.findOne({ userId });

      if (cart) {
        // Kullanıcının sepeti zaten varsa, yeni öğeyi sepete ekleyin
        cart.items.push({ eventId, seatId });
        await cart.save();
      } else {
        // Kullanıcının henüz sepeti yoksa, yeni sepet oluşturun
        const newCart = new Cart({ userId, items: [{ eventId, seatId }] });
        await newCart.save();
      }

      res.status(201).json({ message: "Öğe sepete eklendi" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  removeFromCart: async (req, res) => {
    try {
      const userId = req.params.userId;
      const { eventId, seatId } = req.body;

      const cart = await Cart.findOne({ userId });

      if (!cart) {
        return res.status(404).json({ error: "Sepet bulunamadı" });
      }

      // Sepetten belirtilen öğeyi kaldırın
      cart.items = cart.items.filter(
        (item) => item.eventId.toString() !== eventId && item.seatId.toString() !== seatId
      );

      await cart.save();

      res.json({ message: "Öğe sepetten kaldırıldı" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  clearCart: async (req, res) => {
    try {
      const userId = req.params.userId;

      const cart = await Cart.findOne({ userId });

      if (!cart) {
        return res.status(404).json({ error: "Sepet bulunamadı" });
      }

      // Sepeti temizle
      cart.items = [];

      await cart.save();

      res.json({ message: "Sepet temizlendi" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  checkout: async (req, res) => {
    try {
      const userId = req.user.id; 
      const items = req.body.items; 

    
      for (const item of items) {
        const eventId = item.eventId;
        const seatId = item.seatId;

        const event = await Event.findById(eventId);
        if (!event) {
          return res.status(404).json({ error: "Etkinlik bulunamadı" });
        }

        const seat = event.location.seats.find(s => s._id.toString() === seatId);
        if (!seat) {
          return res.status(404).json({ error: "Yer bulunamadı" });
        }

        if (seat.reserved) {
          return res.status(400).json({ error: "Yer zaten rezerve edilmiş" });
        }

        seat.reserved = true;
      }

      const cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ error: "Sepet bulunamadı" });
      }

      cart.items = [];
      await cart.save();

      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
