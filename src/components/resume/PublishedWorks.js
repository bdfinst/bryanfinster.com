import { Grid, Link, Typography, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import { formatDate } from '../../utils/formatDate'
import CardX from '../common/Card'
import CardContent from '../common/CardContent'

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  text: {
    fontSize: 14,
    textAlign: 'justified',
    color: theme.palette.secondary.main,
  },
  entity: {
    fontSize: 20,
    textAlign: 'left',
  },
  date: {
    fontSize: 15,
    textAlign: 'right',
  },
  position: {
    fontSize: 12,
    textAlign: 'left',
  },
}))

export default (props) => {
  const classes = useStyles()

  const renderData = () => {
    const { dataArr } = props

    const currentPubs = dataArr.filter((item) => item.releaseDate.length < 4)

    const sorted = dataArr

      .filter((item) => item.releaseDate.length > 4)
      .sort((dataA, dataB) => dataA.releaseDate < dataB.releaseDate)

    const pubs = currentPubs.concat(sorted)

    return pubs.map((data) => (
      <>
        <Grid item xs={6}>
          <Card elevation={1}>
            <CardContent>
              <Grid container>
                <Grid item xs={12}>
                  <Typography className={classes.subtitle}>
                    <Link href={data.website}>{data.name}</Link>
                  </Typography>
                </Grid>

                <Grid container>
                  <Grid item xs={6}>
                    <Typography className={classes.text} align="left">
                      {data.publisher}
                    </Typography>
                  </Grid>

                  <Grid item xs={6}>
                    <Typography className={classes.text} align="right">
                      {formatDate(data.releaseDate, '-')}
                    </Typography>
                  </Grid>
                </Grid>

                {data.event ? (
                  <Grid item xs={6}>
                    <Typography className={classes.text}>
                      {data.event}
                    </Typography>
                  </Grid>
                ) : (
                  <div />
                )}
                <Grid item xs={12}>
                  <Typography className={classes.text}>
                    <br />
                    {data.summary}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </>
    ))
  }

  const { dataArr } = props

  if (!dataArr || dataArr.length === 0) return <div />

  return (
    <CardX title="Publications & Presentations">
      <CardContent>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          {renderData()}
        </Grid>
      </CardContent>
    </CardX>
  )
}
