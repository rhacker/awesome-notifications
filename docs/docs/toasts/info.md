---
layout: docs
---

# Toasts: Info
Method `info()` shows new `info` toast.


## Syntax
```javascript
AWN.info([message,options])
```
### Parameters
{% include param-desc.md optional=true name="message" desc="
  Defines message of the toast. Can be any valid HTML or text string. Will be set from defaults if omitted.
"%}
{% include param-desc.md optional=true name="options" desc="
  [Instance of Options](/awesome-notifications/docs/customization/), which will override globals for this call
"%}

### Return value
A new [HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) instance


## Examples

{% include awn-example.md js="new AWN().info()" label="Use defaults" %}
{% include awn-example.md js="new AWN().info('Custom info message', {durations: {info: 0}})" label="Use custom" %}
