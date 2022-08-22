const Item = require("../models/Item");
const router = require("express").Router();


//CREATE ITEM
router.post("/", async (req, res) => {
  const newItem = new Item(req.body);

  try {
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE ITEM
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE ITEM
router.delete("/:id", async (req, res) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json("Item deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ITEM
router.get("/find/:id", async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;