import PatientCard from "../../components/Therapist/PatientCard";
import { Grid, Typography } from "@material-ui/core";

const PatientList = () => {
  return (
    <div>
      <Typography gutterBottom variant="h3" component="div" align="center">
        Here's a list of all patients.
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={3}>
          <PatientCard
            name="Ahana"
            email="ahana@yahoo.com"
            city="Dumka"
            country="India"
          />
        </Grid>
        <Grid item xs={3}>
          <PatientCard
            name="Ahana"
            email="ahana@yahoo.com"
            city="Dumka"
            country="India"
          />
        </Grid>
        <Grid item xs={3}>
          <PatientCard
            name="Ahana"
            email="ahana@yahoo.com"
            city="Dumka"
            country="India"
          />
        </Grid>
        <Grid item xs={3}>
          <PatientCard
            name="Ahana"
            email="ahana@yahoo.com"
            city="Dumka"
            country="India"
          />
        </Grid>
        <Grid item xs={3}>
          <PatientCard
            name="Ahana"
            email="ahana@yahoo.com"
            city="Dumka"
            country="India"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default PatientList;
