import { Grid, Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import Card from '../common/Card'
import CardContent from '../common/CardContent'

const useStyles = makeStyles((theme) => {
  return {
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      color: 'blue',
    },
    text: {
      fontSize: 14,
      textAlign: 'justified',
      color: 'textSecondary',
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
  }
})

export default (props) => {
  const classes = useStyles()

  const renderData = () => {
    const { dataArr, type } = props

    return dataArr
      .sort((dataA, dataB) => {
        return dataA.releaseDate < dataB.releaseDate
      })
      .map((data) => {
        return (
          <>
            <Grid item xs={6}>
              <Card>
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
                          {data.releaseDate}
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
        )
      })
  }

  const { dataArr, name } = props

  if (!dataArr || dataArr.length === 0) return <div />

  return (
    <Card title="Published Works">
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
    </Card>
  )
}
