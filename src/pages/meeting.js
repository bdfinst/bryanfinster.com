import React, { useEffect, useState } from 'react'
import {
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core'
import { blueGrey, lightBlue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles'

import Layout from '../components/Layout'

const useStyles = makeStyles((theme) => {
  return {
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
      width: '10ch',
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
    retailCost: 0.58,
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
        setSeconds((seconds) => {
          return seconds + 1
        })
      }, 1000)
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }
    return () => {
      return clearInterval(interval)
    }
  }, [isActive, seconds])

  const uoms = ['lb', 'kg', 'ea', 'l', 'gal'].sort()

  return (
    <Layout>
      {/* <div id="resume" style={{ padding: 10, maxWidth: 1000 }}> */}
      <Container>
        <Grid container spacing={1}>
          <Grid key="header" item xs={12}>
            Meeting Cost Calculator
          </Grid>
          <Grid key="inputs" item xs={12}>
            <TextField
              className={classes.numberField}
              class={classes.textField}
              size="small"
              label="Attendance"
              type="number"
              defaultValue={values.attendance}
              id="attendance"
              variant="outlined"
              onChange={handleChange('attendance')}
            />
            <TextField
              className={classes.numberField}
              size="small"
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
          <Grid key="commodity" item xs={12}>
            <TextField
              className={classes.textField}
              size="small"
              label="Product Name"
              defaultValue={values.productName}
              id="attendance"
              variant="outlined"
              onChange={handleChange('productName')}
            />
            <TextField
              className={classes.numberField}
              size="small"
              label="Retail Cost"
              type="number"
              defaultValue={values.retailCost}
              id="retailCost"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              variant="outlined"
              onChange={handleChange('retailCost')}
            />
            <TextField
              className={classes.numberField}
              size="small"
              label="Margin"
              type="number"
              defaultValue={values.marginPct}
              id="marginPct"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">%</InputAdornment>
                ),
              }}
              variant="outlined"
              onChange={handleChange('marginPct')}
            />
            <FormControl className={classes.formControl}>
              <InputLabel id="uom">Unit of Measure</InputLabel>
              <Select
                labelId="uom"
                id="uom"
                autoWidth={true}
                variant="outlined"
                value="{values.uom}"
                onChange={handleChange('uom')}
              >
                {uoms.map((uom) => {
                  return (
                    <MenuItem key={uom} value={uom}>
                      {uom}
                    </MenuItem>
                  )
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" onClick={toggle}>
              {isActive ? 'Pause' : 'Start'}
            </Button>

            <Button variant="contained" onClick={reset}>
              Reset
            </Button>
          </Grid>
          <Grid key="inputs" item xs={12}>
            ${cost(values.attendance, values.blendedHourlyRate, seconds)}
            <br />
            We need to sell{' '}
            {commodityQuantity(
              cost(values.attendance, values.blendedHourlyRate, seconds),
              values.retailCost,
              values.margin,
            )}{' '}
            {values.uom} of {values.productName} to pay for this meeting.
          </Grid>
        </Grid>
      </Container>
      {/* </div> */}
    </Layout>
  )
}

export default Meeting
