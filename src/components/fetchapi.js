import React from 'react'

export default class Featchapi extends React.Component {
  state = {
    loading: true,
    country: 'ph',
    covid: null
  }
  componentDidMount() {
    this.fetchdata()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.country !== this.state.country) {
      this.fetchdata()
    }
  }

  async fetchdata() {
    const url = `https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search?search=${
      this.state.country
    }`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.data.rows[0])
    this.setState({ loading: false, covid: data.data.rows[0] })
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    }

    if (!this.state.covid) {
      return <div>aint data nigga</div>
    }
    return (
      <section>
        <form className="dropdownsea">
          <label>Select SEA country:</label>
          <select
            id="sea"
            name="sealist"
            form="seaform"
            value={this.state.country}
            onChange={e => this.setState({ country: e.target.value })}
          >
            <option value="Philippines"> Philippines</option>
            <option value="Vietnam"> Vietnam </option>
            <option value="Brunei"> Brunei</option>
            <option value="Cambodia"> Cambodia</option>
            <option value="Indonesia"> Indonesia</option>
            <option value="Malaysia"> Malaysia</option>
            <option value="Myanmar"> Myanmar</option>
            <option value="Singapore"> Singapore</option>
            <option value="Thailand"> Thailand</option>
          </select>
          <img
            src={this.state.covid.flag}
            alt={this.state.country}
            className="flag-sea"
          />
        </form>
        <div className="data-set-parent">
          <div className="data-set">
            <b>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="globe-asia"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path
                  fill="currentColor"
                  d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm-11.34 240.23c-2.89 4.82-8.1 7.77-13.72 7.77h-.31c-4.24 0-8.31 1.69-11.31 4.69l-5.66 5.66c-3.12 3.12-3.12 8.19 0 11.31l5.66 5.66c3 3 4.69 7.07 4.69 11.31V304c0 8.84-7.16 16-16 16h-6.11c-6.06 0-11.6-3.42-14.31-8.85l-22.62-45.23c-2.44-4.88-8.95-5.94-12.81-2.08l-19.47 19.46c-3 3-7.07 4.69-11.31 4.69H50.81C49.12 277.55 48 266.92 48 256c0-110.28 89.72-200 200-200 21.51 0 42.2 3.51 61.63 9.82l-50.16 38.53c-5.11 3.41-4.63 11.06.86 13.81l10.83 5.41c5.42 2.71 8.84 8.25 8.84 14.31V216c0 4.42-3.58 8-8 8h-3.06c-3.03 0-5.8-1.71-7.15-4.42-1.56-3.12-5.96-3.29-7.76-.3l-17.37 28.95zM408 358.43c0 4.24-1.69 8.31-4.69 11.31l-9.57 9.57c-3 3-7.07 4.69-11.31 4.69h-15.16c-4.24 0-8.31-1.69-11.31-4.69l-13.01-13.01a26.767 26.767 0 0 0-25.42-7.04l-21.27 5.32c-1.27.32-2.57.48-3.88.48h-10.34c-4.24 0-8.31-1.69-11.31-4.69l-11.91-11.91a8.008 8.008 0 0 1-2.34-5.66v-10.2c0-3.27 1.99-6.21 5.03-7.43l39.34-15.74c1.98-.79 3.86-1.82 5.59-3.05l23.71-16.89a7.978 7.978 0 0 1 4.64-1.48h12.09c3.23 0 6.15 1.94 7.39 4.93l5.35 12.85a4 4 0 0 0 3.69 2.46h3.8c1.78 0 3.35-1.18 3.84-2.88l4.2-14.47c.5-1.71 2.06-2.88 3.84-2.88h6.06c2.21 0 4 1.79 4 4v12.93c0 2.12.84 4.16 2.34 5.66l11.91 11.91c3 3 4.69 7.07 4.69 11.31v24.6z"
                  className="icon001"
                />
              </svg>{' '}
              Country:
            </b>{' '}
            {this.state.covid.country}
          </div>
          <div className="data-set">
            <b>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="file-signature"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M218.17 424.14c-2.95-5.92-8.09-6.52-10.17-6.52s-7.22.59-10.02 6.19l-7.67 15.34c-6.37 12.78-25.03 11.37-29.48-2.09L144 386.59l-10.61 31.88c-5.89 17.66-22.38 29.53-41 29.53H80c-8.84 0-16-7.16-16-16s7.16-16 16-16h12.39c4.83 0 9.11-3.08 10.64-7.66l18.19-54.64c3.3-9.81 12.44-16.41 22.78-16.41s19.48 6.59 22.77 16.41l13.88 41.64c19.75-16.19 54.06-9.7 66 14.16 1.89 3.78 5.49 5.95 9.36 6.26v-82.12l128-127.09V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24v-40l-128-.11c-16.12-.31-30.58-9.28-37.83-23.75zM384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1zm-96 225.06V416h68.99l161.68-162.78-67.88-67.88L288 346.96zm280.54-179.63l-31.87-31.87c-9.94-9.94-26.07-9.94-36.01 0l-27.25 27.25 67.88 67.88 27.25-27.25c9.95-9.94 9.95-26.07 0-36.01z"
                  className="icon0"
                />
              </svg>{' '}
              Total cases
            </b>{' '}
            {this.state.covid.total_cases}
          </div>
          <div className="data-set">
            <b>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="file-import"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M16 288c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h112v-64zm489-183L407.1 7c-4.5-4.5-10.6-7-17-7H384v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H152c-13.3 0-24 10.7-24 24v264h128v-65.2c0-14.3 17.3-21.4 27.4-11.3L379 308c6.6 6.7 6.6 17.4 0 24l-95.7 96.4c-10.1 10.1-27.4 3-27.4-11.3V352H128v136c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H376c-13.2 0-24-10.8-24-24z"
                  className="icon1"
                />
              </svg>{' '}
              New cases
            </b>{' '}
            {this.state.covid.new_cases}
          </div>
          <div className="data-set">
            <b>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="book-dead"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M272 136c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16zm176 222.4V25.6c0-16-9.6-25.6-25.6-25.6H96C41.6 0 0 41.6 0 96v320c0 54.4 41.6 96 96 96h326.4c12.8 0 25.6-9.6 25.6-25.6v-16c0-6.4-3.2-12.8-9.6-19.2-3.2-16-3.2-60.8 0-73.6 6.4-3.2 9.6-9.6 9.6-19.2zM240 56c44.2 0 80 28.7 80 64 0 20.9-12.7 39.2-32 50.9V184c0 8.8-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16v-13.1c-19.3-11.7-32-30-32-50.9 0-35.3 35.8-64 80-64zM124.8 223.3l6.3-14.7c1.7-4.1 6.4-5.9 10.5-4.2l98.3 42.1 98.4-42.1c4.1-1.7 8.8.1 10.5 4.2l6.3 14.7c1.7 4.1-.1 8.8-4.2 10.5L280.6 264l70.3 30.1c4.1 1.7 5.9 6.4 4.2 10.5l-6.3 14.7c-1.7 4.1-6.4 5.9-10.5 4.2L240 281.4l-98.3 42.2c-4.1 1.7-8.8-.1-10.5-4.2l-6.3-14.7c-1.7-4.1.1-8.8 4.2-10.5l70.4-30.1-70.5-30.3c-4.1-1.7-5.9-6.4-4.2-10.5zm256 224.7H96c-19.2 0-32-12.8-32-32s16-32 32-32h284.8zM208 136c8.8 0 16-7.2 16-16s-7.2-16-16-16-16 7.2-16 16 7.2 16 16 16z"
                  className="icon2"
                />
              </svg>{' '}
              Total Deaths
            </b>{' '}
            {this.state.covid.total_deaths}
          </div>
          <div className="data-set">
            <b>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="skull-crossbones"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M439.15 453.06L297.17 384l141.99-69.06c7.9-3.95 11.11-13.56 7.15-21.46L432 264.85c-3.95-7.9-13.56-11.11-21.47-7.16L224 348.41 37.47 257.69c-7.9-3.95-17.51-.75-21.47 7.16L1.69 293.48c-3.95 7.9-.75 17.51 7.15 21.46L150.83 384 8.85 453.06c-7.9 3.95-11.11 13.56-7.15 21.47l14.31 28.63c3.95 7.9 13.56 11.11 21.47 7.15L224 419.59l186.53 90.72c7.9 3.95 17.51.75 21.47-7.15l14.31-28.63c3.95-7.91.74-17.52-7.16-21.47zM150 237.28l-5.48 25.87c-2.67 12.62 5.42 24.85 16.45 24.85h126.08c11.03 0 19.12-12.23 16.45-24.85l-5.5-25.87c41.78-22.41 70-62.75 70-109.28C368 57.31 303.53 0 224 0S80 57.31 80 128c0 46.53 28.22 86.87 70 109.28zM280 112c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32zm-112 0c17.65 0 32 14.35 32 32s-14.35 32-32 32-32-14.35-32-32 14.35-32 32-32z"
                  className="icon3"
                />
              </svg>{' '}
              New deaths
            </b>{' '}
            {this.state.covid.new_deaths}
          </div>
          <div className="data-set">
            <b>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="shield-virus"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M224,192a16,16,0,1,0,16,16A16,16,0,0,0,224,192ZM466.5,83.68l-192-80A57.4,57.4,0,0,0,256.05,0a57.4,57.4,0,0,0-18.46,3.67l-192,80A47.93,47.93,0,0,0,16,128C16,326.5,130.5,463.72,237.5,508.32a48.09,48.09,0,0,0,36.91,0C360.09,472.61,496,349.3,496,128A48,48,0,0,0,466.5,83.68ZM384,256H371.88c-28.51,0-42.79,34.47-22.63,54.63l8.58,8.57a16,16,0,1,1-22.63,22.63l-8.57-8.58C306.47,313.09,272,327.37,272,355.88V368a16,16,0,0,1-32,0V355.88c0-28.51-34.47-42.79-54.63-22.63l-8.57,8.58a16,16,0,0,1-22.63-22.63l8.58-8.57c20.16-20.16,5.88-54.63-22.63-54.63H128a16,16,0,0,1,0-32h12.12c28.51,0,42.79-34.47,22.63-54.63l-8.58-8.57a16,16,0,0,1,22.63-22.63l8.57,8.58c20.16,20.16,54.63,5.88,54.63-22.63V112a16,16,0,0,1,32,0v12.12c0,28.51,34.47,42.79,54.63,22.63l8.57-8.58a16,16,0,0,1,22.63,22.63l-8.58,8.57C329.09,189.53,343.37,224,371.88,224H384a16,16,0,0,1,0,32Zm-96,0a16,16,0,1,0,16,16A16,16,0,0,0,288,256Z"
                  className="icon3"
                />
              </svg>{' '}
              Total Recovered
            </b>{' '}
            {this.state.covid.total_recovered}
          </div>
          <div className="data-set">
            <b>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="viruses"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M624,352H611.88c-28.51,0-42.79-34.47-22.63-54.63l8.58-8.57a16,16,0,1,0-22.63-22.63l-8.57,8.58C546.47,294.91,512,280.63,512,252.12V240a16,16,0,0,0-32,0v12.12c0,28.51-34.47,42.79-54.63,22.63l-8.57-8.58a16,16,0,0,0-22.63,22.63l8.58,8.57c20.16,20.16,5.88,54.63-22.63,54.63H368a16,16,0,0,0,0,32h12.12c28.51,0,42.79,34.47,22.63,54.63l-8.58,8.57a16,16,0,1,0,22.63,22.63l8.57-8.58c20.16-20.16,54.63-5.88,54.63,22.63V496a16,16,0,0,0,32,0V483.88c0-28.51,34.47-42.79,54.63-22.63l8.57,8.58a16,16,0,1,0,22.63-22.63l-8.58-8.57C569.09,418.47,583.37,384,611.88,384H624a16,16,0,0,0,0-32ZM480,384a32,32,0,1,1,32-32A32,32,0,0,1,480,384ZM346.51,213.33h16.16a21.33,21.33,0,0,0,0-42.66H346.51c-38,0-57.05-46-30.17-72.84l11.43-11.44A21.33,21.33,0,0,0,297.6,56.23L286.17,67.66c-26.88,26.88-72.84,7.85-72.84-30.17V21.33a21.33,21.33,0,0,0-42.66,0V37.49c0,38-46,57.05-72.84,30.17L86.4,56.23A21.33,21.33,0,0,0,56.23,86.39L67.66,97.83c26.88,26.88,7.85,72.84-30.17,72.84H21.33a21.33,21.33,0,0,0,0,42.66H37.49c38,0,57.05,46,30.17,72.84L56.23,297.6A21.33,21.33,0,1,0,86.4,327.77l11.43-11.43c26.88-26.88,72.84-7.85,72.84,30.17v16.16a21.33,21.33,0,0,0,42.66,0V346.51c0-38,46-57.05,72.84-30.17l11.43,11.43a21.33,21.33,0,0,0,30.17-30.17l-11.43-11.43C289.46,259.29,308.49,213.33,346.51,213.33ZM160,192a32,32,0,1,1,32-32A32,32,0,0,1,160,192Zm80,32a16,16,0,1,1,16-16A16,16,0,0,1,240,224Z"
                  className="icon4"
                />
              </svg>{' '}
              Active cases
            </b>{' '}
            {this.state.covid.active_cases}
          </div>
          <div className="data-set">
            <b>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="hospital"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M448 492v20H0v-20c0-6.627 5.373-12 12-12h20V120c0-13.255 10.745-24 24-24h88V24c0-13.255 10.745-24 24-24h112c13.255 0 24 10.745 24 24v72h88c13.255 0 24 10.745 24 24v360h20c6.627 0 12 5.373 12 12zM308 192h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-168 64h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12zm104 128h-40c-6.627 0-12 5.373-12 12v84h64v-84c0-6.627-5.373-12-12-12zm64-96h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12zm-116 12c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12v-40zM182 96h26v26a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V96h26a6 6 0 0 0 6-6V70a6 6 0 0 0-6-6h-26V38a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v26h-26a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6z"
                  className="icon5"
                />
              </svg>{' '}
              Serious critical:
            </b>{' '}
            {this.state.covid.serious_critical}
          </div>
        </div>
      </section>
    )
  }
}
