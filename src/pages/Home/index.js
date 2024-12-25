import React from "react";
import PropTypes from "prop-types";
import { Container, Grid } from "@mui/material";
import Text from '../../components/text/index';

function HomeView(props) {

  return (
    <Container sx={{ minHeight: '100vh', padding: 2 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sx={{ textAlign: 'center' }}>
          <Text h={"h4"} label={"XXX Encontrão!"} font={"Lobster"} styles={{ textAlign: 'center' }} />
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center' }} >
          <Text h={"h5"} label={"Buenas Encontristas de todos os rincões!"} font={"Open Sans"} styles={{ textAlign: 'center' }} />
        </Grid>
        <Grid item xs={12}>
          <Text h={"h6"} label={"Explore nosso aplicativo para:"} font={"Arial"} />
        </Grid>
        <Grid item xs={12}>
          <Text h={"h6"} label={
            <>
              <span>
                <strong>Mapa:</strong> Encontre locais para fotos, lanches, exploração, provas, dormitórios e mais!
              </span>
            </>

          } />
        </Grid>
        <Grid item xs={12}>
          <Text h={"h6"} label={
            <>
              <span>
                <strong>Informações:</strong> Confira regras, detalhes sobre o IFFar, outros institutos, o evento, o NTG Trempe da Saudade, desenvolvedores e cardápio.
              </span>
            </>

          } />
        </Grid>
        <Grid item xs={12}>
          <Text h={"h6"} label={
            <>
              <span>
                <strong>Provas:</strong> Veja provas, participantes, locais, notas e resultados.
              </span>
            </>

          } />
        </Grid>
      </Grid>
    </Container>
  );
}

HomeView.propTypes = {
  title: PropTypes.string,
};

HomeView.defaultProps = {
  title: "",
};

export default HomeView;
