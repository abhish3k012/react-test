import React from 'react'

export default function edit() {
  return (
    <div
        style={{
          height: "100%",
          width: "100%",
          backgroundImage: `url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjU0NmJhdGNoMy1teW50LTM0LWJhZGdld2F0ZXJjb2xvcl8xLmpwZw.jpg")`,
          textAlign: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      >
        <p style={{ fontSize: 30, fontWeight: "bold" }}>Login Page</p>
        <label style={{}}>Email</label>
        <br></br>
        <input
          style={{
            width: "35%",
            marginTop: 12,
            marginBottom: 12,
            borderRadius: 20,
            height: 20,
            padding: 12,
          }}
          type="text"
          onChange={(e) => {
            this.setState({ email: e.target.value });
          }}
        />
        <br></br>
        <label>Password</label>
        <br></br>
        <input
          style={{
            width: "35%",
            marginTop: 12,
            marginBottom: 12,
            borderRadius: 20,
            height: 20,
            padding: 12,
          }}
          type="text"
          onChange={(e) => {
            this.setState({ password: e.target.value });
          }}
        />
        <br></br>
        <br></br>
        <button
          style={{
            width: "40%",
            color: "white",
            marginTop: 10,
            padding: 10,
            backgroundColor: "green",
            borderRadius: 20,
            fontSize: 17,
          }}
          onClick={this.handleLogin.bind(this)}
        >
          Login
        </button>
       
      </div>
  )
}
