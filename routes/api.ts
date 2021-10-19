import express from 'express';

import { graphqlConfig } from '../graphql/config';


const router = express.Router();

router.use("/v1", graphqlConfig);

module.exports = router;