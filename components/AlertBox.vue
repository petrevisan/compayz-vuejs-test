<template>
    <div>
        <div id="alert">
            <span>Plano indisponível no momento.</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AlertBox'
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
  background: red;
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
