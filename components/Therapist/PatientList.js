import PatientCard from "../../components/Therapist/PatientCard";
import { Grid, Typography } from "@material-ui/core";

const PatientList = ({ clients }) => {
  return (
    <div>
      <Typography gutterBottom variant="h3" component="div" align="center">
        Here's a list of all patients.
      </Typography>
      <Grid container spacing={4}>
        {clients.map((client) => (
          <Grid item xs={12} md={6} lg={4} key={client._id}>
            <PatientCard
              id={client.user._id}
              name={client.user.name}
              email={client.user.email}
              city={client.city}
              country={client.country}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PatientList;
