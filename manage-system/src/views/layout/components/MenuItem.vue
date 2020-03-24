<script>
export default {
  name: "MenuItem",
  functional: true,
  props: {
    iconName: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  render(h, context) {
    const { iconName, title } = context.props;
    const vnodes = [];
    if (iconName) {
      vnodes.push(<icon class={iconName} />);
    }

    if (title) {
      vnodes.push(<span>{title}</span>);
    }
    return vnodes;
  }
};
</script>
