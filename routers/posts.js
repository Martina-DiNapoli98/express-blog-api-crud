const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController")


  /* index */
router.get('/', postController.index);

/* show */
router.get('/:slug', postController.show);

/* store */
router.post('/',postController.store);

/* update */
router.put('/:slug', postController.update);

/* modify */
router.patch('/:slug',postController.modify);

/* destroy */
router.delete('/:slug',postController.destroy)

/* exports modules */
module.exports = router;