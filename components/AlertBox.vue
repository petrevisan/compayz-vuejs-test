<template>
    <div>
        <div id="alert" :style="{ background: bgColor, color: textColor }">
            <span>{{ text }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AlertBox',
    props: {
        text: {
            type: String,
            required: true
        },
        bgColor: {
            type: String,
            default: '#000'
        },
        textColor: {
            type: String,
            default: '#fff'
        }
    }
};
</script>

<style>
@keyframes showUp {
  0%, 100% {
    opacity: 0;
    filter: blur(20px);
    transform: translatey(20px);
  }

  25%, 75% {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
}
#alert {
  padding: 10px 20px;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  width: 300px;
  text-align: center;
  position: fixed;
  top: 90%;
  right: 5%;
  animation: showUp 2s forwards;
}

@media(max-width:768px) {
  #alert {
    position: fixed;
  }
}
</style>
