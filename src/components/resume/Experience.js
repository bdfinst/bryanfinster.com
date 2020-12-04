import { Divider, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

import { formatDate } from '../../utils/formatDate'
import Card from '../common/Card'
import CardContent from '../common/CardContent'

const useStyles = makeStyles((theme) => {
  return {
    // root: {
    //   minWidth: 275,
    // },
    title: {
      fontSize: 25,
      textAlign: 'center',
      color: 'blue',
    },
    subTitle: {
      fontSize: 18,
      textAlign: 'center',
      color: theme.palette.primary.main,
    },
    text: {
      fontSize: 14,
      textAlign: 'justified',
      color: theme.palette.secondary.main,
    },
    entity: {
      fontSize: 18,
      textAlign: 'left',
      color: theme.palette.primary.main,
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

  const showHighlights = (highlights) => {
    return highlights && highlights.length > 1 ? (
      <>
        <Grid item xs={12}>
          <Typography className={classes.subTitle}>Highlights</Typography>
        </Grid>
        {highlights.map((highlight) => {
          return (
            <>
              <Grid item xs={1}>
                -
              </Grid>
              <Grid item xs={11}>
                <Typography className={classes.text}>{highlight}</Typography>
              </Grid>
            </>
          )
        })}
      </>
    ) : (
      <></>
    )
  }
  const renderData = (dataArr, type) => {
    return dataArr.map((data) => {
      let endDate = ' - Current'
      let entityName = ''
      if (type === 'work') {
        entityName = data.company
      } else if (type === 'volunteer') {
        entityName = data.organization
      }

      if (data.endDate) {
        endDate = ` - ${formatDate(data.endDate, '-')}`
      }

      return (
        <>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <Typography className={classes.entity}>
                {entityName} - {data.position}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography className={classes.date}>
                {formatDate(data.startDate, '-')} {endDate}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.text}>{data.summary}</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
            spacing={1}
          >
            {showHighlights(data.highlights)}
          </Grid>
          <br />
          <Divider variant="middle" />
          <br />
        </>
      )
    })
  }

  const { dataArr, name, type } = props

  if (!dataArr || dataArr.length === 0) return <div />

  return (
    <Card title={name}>
      <CardContent>{renderData(dataArr, type)}</CardContent>
    </Card>
  )
}
