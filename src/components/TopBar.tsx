import { AppBar, Toolbar, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2'

export default function TopBar() {
  return (
      <AppBar position='static'>
        <Toolbar>
          <Grid container spacing={4} xsOffset={'auto'}>
            <Grid>
              <Typography variant='h6'>First</Typography> 
            </Grid>

            <Grid>
              <Typography variant='h6'>Second</Typography> 
            </Grid>

            <Grid>
              <Typography variant='h6'>Third</Typography> 
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

  )
}
