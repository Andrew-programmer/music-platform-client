import {Box} from "@mui/system";

import styles from './Comment.module.scss';
import {Divider} from "@mui/material";
import {RateButtonGroup} from "./components/RateButtonGroup/RateButtonGroup";
import {Rate} from "./components/Rate/Rate";

export const Comment = () => {

    return (
      <Box className={styles.MainContainer}>
          <Box className={styles.Box}>
              Andrii
              <Rate isPositive={false}/>
          </Box>
          <Divider className={styles.Divider} flexItem variant={"middle"}>private opinion</Divider>
          <Box className={styles.Box}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam facere iusto perspiciatis quis recusandae vitae voluptas! Eaque laboriosam officiis pariatur!
          </Box>
      </Box>
    );
}
