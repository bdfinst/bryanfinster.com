import React, { useEffect, useState } from 'react'
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import { blueGrey, lightBlue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'

const useStyles = makeStyles((theme) => {
  return {
    header: {
      fontSize: 30,
      textAlign: 'center',
      color: theme.palette.primary.main,
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 80,
    },
    title: {
      fontSize: 25,
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 18,
      textAlign: 'center',
    },
    info: {
      fontSize: 14,
    },
    numberField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '15ch',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }
})

const Meeting = ({ data }) => {
  const classes = useStyles()
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [values, setValues] = useState({
    attendance: 3,
    blendedHourlyRate: 50,
    productName: 'Bananas',
    margin: 0.03,
    unitRetail: 0.58,
    uom: 'lb',
  })

  const cost = (attendance, blendedHourlyRate, durationSec) => {
    const secondsPerHour = 3600
    return (
      (blendedHourlyRate / secondsPerHour) *
      attendance *
      durationSec
    ).toFixed(2)
  }

  const commodityQuantity = (totalCost, retail, margin) => {
    return Math.round(totalCost * (retail / margin))
  }

  const handleChange = (prop) => {
    return (event) => {
      setValues({ ...values, [prop]: event.target.value })
    }
  }



  const handleChangeMargin = () => {
    return (event) => {
      if (event.target.value > 100 ) {
        setValues({ ...values, margin: 1 })
      } else if (event.target.value <0 ) {
        setValues({ ...values, margin: 0 })
      } else {
      setValues({ ...values, margin: event.target.value / 100 })
      }
    }
  }

  const toggle = () => {
    setIsActive(!isActive)
  }

  const reset = () => {
    setSeconds(0)
    setIsActive(false)
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((time) => {
          return time + 1
        })
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => {
      return clearInterval(interval)
    }
  }, [isActive, seconds])

  const unitsOfMeasure = ['lb', 'kg', 'ea', 'l', 'gal'].sort()

  const Header = () => {
    return (
      <>
        <CardHeader
          className={classes.header}
          title="Meeting Cost Calculator"
        />
      </>
    )
  }

  const CostInput = () => {
    return (
      <>
        <CardContent>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid key="inputs" item xs={2}>
              <TextField
                required
                className={classes.numberField}
                label="Attendance"
                type="number"
                defaultValue={values.attendance}
                id="attendance"
                variant="outlined"
                onChange={handleChange('attendance')}
              />{' '}
            </Grid>

            <Grid key="inputs" item xs={2}>
              <TextField
                required
                className={classes.numberField}
                label="Blended Rate"
                type="number"
                defaultValue={values.blendedHourlyRate}
                id="rate"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
                  ),
                }}
                variant="outlined"
                onChange={handleChange('blendedHourlyRate')}
              />
            </Grid>
          </Grid>
        </CardContent>
      </>
    )
  }

  const Commodity = () => {
    return (
      <>
        <Grid
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={3}>
            <TextField
              className={classes.textField}
              label="Product Name"
              defaultValue={values.productName}
              id="attendance"
              variant="outlined"
              onChange={handleChange('productName')}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              className={classes.numberField}
              label="Unit Retail"
              type="number"
              defaultValue={values.unitRetail}
              id="unitRetail"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              variant="outlined"
              onChange={handleChange('unitRetail')}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              className={classes.numberField}
              label="% Margin"
              type="number"
              defaultValue={values.margin * 100}
              id="margin"
              variant="outlined"
              onChange={handleChangeMargin()}
            />
          </Grid>
          <Grid item xs={1}>
          <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel  >
        Units
        </InputLabel>
        <Select
        labelId="uom"
                id="uom"
          value={values.uom}
          onChange={handleChange('uom')}
        >


                {unitsOfMeasure.map((uom) => {
                  return (
                    <MenuItem key={uom} value={uom}>
                      {uom}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </>
    )
  }

  const Buttons = () => {
    return (
      <>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={1}>
            <Button variant="contained" onClick={toggle}>
              {isActive ? 'Pause' : 'Start'}
            </Button>
          </Grid>

          <Grid item xs={1}>
            <Button variant="contained" onClick={reset}>
              Reset
            </Button>
          </Grid>
        </Grid>
      </>
    )
  }

  const TotalCost = () => {
    return (
      <>
        <div id="resume" style={{ padding: 10 }}>
          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid key="inputs" item xs={12}>
              <Typography className={classes.title}>
                Cost: $
                {cost(values.attendance, values.blendedHourlyRate, seconds)}
              </Typography>
              <br />
              <Typography className={classes.title}>
                We need to sell{' '}
                {commodityQuantity(
                  cost(values.attendance, values.blendedHourlyRate, seconds),
                  values.unitRetail,
                  values.margin,
                )}{' '}
                {values.uom} of {values.productName} to pay for this meeting.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </>
    )
  }
  return (
    <Layout>
      <Card elevation={0}>
        <Header />
        <CostInput />
        <Commodity />
        <Buttons />
        <br />
        <TotalCost />
      </Card>
    </Layout>
  )
}

export default Meeting
