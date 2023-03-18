import { computed } from "vue";
import { useStore } from "vuex";

export default function authenTicatedUser() {
  const store = useStore();

  const user = computed(() => {
    return store.getters["auth/user"];
  });

  return { user };
}
