<template>
  <div class="container">
    <div class="content" v-if="qrCode">
      <img :src="qrCode" alt="QR Code">
      <br>
      <a :href="qrCode" download="qrcode.png">
        <el-button type="success">Download QR Code</el-button>
      </a>
    </div>
    <div class="content" v-else>
      <p>Input something for QR code generation...</p>
    </div>
    <div class="spacer"></div>
    <div class="input-container">
      <el-input clearable v-model="inputText" @input="generateQRCode" placeholder="Input text"></el-input>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* Use 100% of viewport height */
  justify-content: center;
  /* Vertically center content */
  align-items: center;
  /* Horizontally center content */
}

.content {
  text-align: center;
}

.spacer {
  height: 20px;
  /* Add some space between content and input */
}

.input-container {
  width: 100%;
  max-width: 300px;
  /* Adjust as needed */
}
</style>


<script>
import QRCode from 'qrcode';

export default {
  data() {
    return {
      qrCode: null,
      inputText: '', // User input text
    };
  },
  methods: {
    generateQRCode() {
      let options = {
        errorCorrectionLevel: 'H',
        margin: 4,
        width: 256,
        height: 256,
        color: {
          dark: "#000000ff",
          light: "#ffffffff"
        }
      };

      QRCode.toDataURL(this.inputText, options)
        .then((url) => {
          this.qrCode = url;
        })
        .catch((err) => {
          console.error('Error generating QR code:', err);
        });
    },
    handleImageChange(event) {
      const file = event.target.files[0];

      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.logoImage = e.target.result;
          this.generateQRCode();
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style>/* Add custom styles here if needed */</style>
