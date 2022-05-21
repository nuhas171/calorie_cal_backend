const foodModel = require("./../models/foods");

exports.foodController = async (req, res) => {
  const food = await foodModel.findOne({
    user: req.user.id,
    day: req.body.day,
  });
  let newFood = {};

  console.log(req.body);

  if (food) {
    switch (req.body.mealtime) {
      case "breakfast":
        newFood = await foodModel.updateOne(
          { user: req.user.id, day: req.body.day },
          {
            breakfast: req.body.foods,
            lunch: food.lunch,
            dinner: food.lunch,
            others: food.others,
            day: food.day,
            user: food.user,
          }
        );
        break;

      case "lunch":
        newFood = await foodModel.updateOne(
          { user: req.user.id, day: req.body.day },
          {
            breakfast: food.breakfast,
            lunch: req.body.foods,
            dinner: food.lunch,
            others: food.others,
            day: food.day,
            user: food.user,
          }
        );
        break;

      case "dinner":
        newFood = await foodModel.updateOne(
          { user: req.user.id, day: req.body.day },
          {
            breakfast: food.breakfast,
            lunch: food.lunch,
            dinner: req.body.foods,
            others: food.others,
            day: food.day,
            user: food.user,
          }
        );
        break;

      case "others":
        newFood = await foodModel.updateOne(
          { user: req.user.id, day: req.body.day },
          {
            breakfast: food.breakfast,
            lunch: food.lunch,
            dinner: food.dinner,
            others: req.body.foods,
            day: food.day,
            user: food.user,
          }
        );
        break;

      default:
        break;
    }
  } else {
    newFood = await foodModel.create({
      [req.body.mealtime]: req.body.foods,
      day: req.body.day,
      user: req.user.id,
    });
  }

  res.status(201).json({
    data: newFood,
  });
};

exports.myFoods = async (req, res) => {
  const foods = await foodModel.find({user: req.user.id});

  res.status(200).json({
    data: foods
  })
}
