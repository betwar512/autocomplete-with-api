var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tsup/assets/cjs_shims.js
var init_cjs_shims = __esm({
  "node_modules/tsup/assets/cjs_shims.js"() {
  }
});

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module2) {
    init_cjs_shims();
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module2.exports = _interopRequireDefault, module2.exports.__esModule = true, module2.exports["default"] = module2.exports;
  }
});

// node_modules/@mui/icons-material/utils/createSvgIcon.js
var require_createSvgIcon = __commonJS({
  "node_modules/@mui/icons-material/utils/createSvgIcon.js"(exports) {
    "use strict";
    init_cjs_shims();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "default", {
      enumerable: true,
      get: function() {
        return _utils.createSvgIcon;
      }
    });
    var _utils = require("@mui/material/utils");
  }
});

// node_modules/@mui/icons-material/LocationOn.js
var require_LocationOn = __commonJS({
  "node_modules/@mui/icons-material/LocationOn.js"(exports) {
    "use strict";
    init_cjs_shims();
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require("react/jsx-runtime");
    var _default = (0, _createSvgIcon.default)(/* @__PURE__ */ (0, _jsxRuntime.jsx)("path", {
      d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
    }), "LocationOn");
    exports.default = _default;
  }
});

// src/lib/index.tsx
var lib_exports = {};
__export(lib_exports, {
  ACAddress: () => ACAddress_default,
  ACGoogleMapSearchField: () => ACGoogleMapSearchField_default,
  default: () => lib_default
});
module.exports = __toCommonJS(lib_exports);
init_cjs_shims();

// src/lib/AutoCompleteWithApi.tsx
init_cjs_shims();
var import_react2 = __toESM(require("react"));
var import_Autocomplete = __toESM(require("@mui/material/Autocomplete"));
var import_TextField = __toESM(require("@mui/material/TextField"));

// src/lib/AutoCompleteLiElement.tsx
init_cjs_shims();
var import_react = __toESM(require("react"));
var import_material = require("@mui/material");
var AutoCompleteLiElement = (props) => {
  return /* @__PURE__ */ import_react.default.createElement("li", __spreadValues({}, props.params), /* @__PURE__ */ import_react.default.createElement(import_material.Grid, {
    container: true,
    alignItems: "center"
  }, /* @__PURE__ */ import_react.default.createElement(import_material.Grid, {
    item: true
  }), /* @__PURE__ */ import_react.default.createElement(import_material.Grid, {
    item: true,
    xs: true
  }, /* @__PURE__ */ import_react.default.createElement(import_material.Typography, {
    variant: "body2",
    color: "textSecondary"
  }, props.option.value))));
};
var AutoCompleteLiElement_default = AutoCompleteLiElement;

// src/lib/AutoCompleteWithApi.tsx
var AutoCompleteWithApi = (props) => {
  const [value, setValue] = import_react2.default.useState(props.selectedOption ? props.selectedOption : null);
  const [inputValue, setInputValue] = import_react2.default.useState("");
  const [options, setOptions] = import_react2.default.useState([]);
  const [loading, setLoading] = import_react2.default.useState(false);
  import_react2.default.useEffect(() => {
    console.log(inputValue);
    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return void 0;
    }
    setLoading(true);
    props.onSearch(inputValue).then((result) => {
      setOptions(result ? result : []);
      setLoading(false);
    }).catch((e) => {
      setLoading(false);
    });
  }, [value, inputValue, loading, props]);
  return /* @__PURE__ */ import_react2.default.createElement(import_Autocomplete.default, {
    options,
    includeInputInList: true,
    filterOptions: (x) => x,
    filterSelectedOptions: true,
    loading,
    value,
    getOptionLabel: (o) => o.value,
    isOptionEqualToValue: (option, value2) => option.id === value2.id,
    onChange: (event, newValue) => {
      setOptions(newValue ? [newValue, ...options] : options);
      setValue(newValue);
      if (props.onValueSelected && newValue) {
        props.onValueSelected(newValue);
      }
    },
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
    renderInput: (params) => /* @__PURE__ */ import_react2.default.createElement(import_TextField.default, __spreadValues(__spreadValues({}, params), props.textFiledProps)),
    renderOption: (params, option) => {
      return /* @__PURE__ */ import_react2.default.createElement(AutoCompleteLiElement_default, {
        option,
        params,
        key: "option-" + option.id
      });
    }
  });
};
var AutoCompleteWithApi_default = AutoCompleteWithApi;

// src/lib/AddressAutoComplete/ACAddress.tsx
init_cjs_shims();
var import_react5 = __toESM(require("react"));
var import_TextField3 = __toESM(require("@mui/material/TextField"));
var import_Grid2 = __toESM(require("@mui/material/Grid"));

// src/lib/AddressAutoComplete/ACGoogleMapSearchField.tsx
init_cjs_shims();
var import_react4 = __toESM(require("react"));
var import_TextField2 = __toESM(require("@mui/material/TextField"));
var import_Autocomplete2 = __toESM(require("@mui/material/Autocomplete"));
var import_parse = __toESM(require("autosuggest-highlight/parse"));
var import_throttle = __toESM(require("lodash/throttle"));
var import_js_api_loader = require("@googlemaps/js-api-loader");

// src/lib/AddressAutoComplete/ACAddressCompleteLiElement.tsx
init_cjs_shims();
var import_react3 = __toESM(require("react"));
var import_Typography = __toESM(require("@mui/material/Typography"));
var import_Grid = __toESM(require("@mui/material/Grid"));
var import_LocationOn = __toESM(require_LocationOn());
var ACAddressCompleteLiElement = (props) => {
  return /* @__PURE__ */ import_react3.default.createElement("li", __spreadValues({}, props.params), /* @__PURE__ */ import_react3.default.createElement(import_Grid.default, {
    container: true,
    alignItems: "center"
  }, /* @__PURE__ */ import_react3.default.createElement(import_Grid.default, {
    item: true
  }, /* @__PURE__ */ import_react3.default.createElement(import_LocationOn.default, {
    sx: { color: (t) => t.palette.text.secondary, mr: 2 }
  })), /* @__PURE__ */ import_react3.default.createElement(import_Grid.default, {
    item: true,
    xs: true
  }, props.parts.map((part, index) => /* @__PURE__ */ import_react3.default.createElement("span", {
    key: "item-in" + index,
    style: { fontWeight: part.highlight ? 700 : 400 }
  }, part.text)), /* @__PURE__ */ import_react3.default.createElement(import_Typography.default, {
    variant: "body2",
    color: "textSecondary"
  }, props.option.structured_formatting.secondary_text))));
};
var ACAddressCompleteLiElement_default = ACAddressCompleteLiElement;

// src/lib/AddressAutoComplete/ACGoogleMapSearchField.tsx
var autocompleteService = { insistence: null };
var google_locality = {
  floor: "short_name",
  subpremise: "short_name",
  street_number: "short_name",
  route: "long_name",
  locality: "long_name",
  administrative_area_level_1: "short_name",
  country: "short_name",
  administrative_area_level_2: "short_name",
  postal_code: "short_name"
};
function getProperty(o, propertyName) {
  return o[propertyName];
}
var ACGoogleMapSearchField = (props) => {
  const [value, setValue] = import_react4.default.useState(props.address ? props.address : null);
  const [inputValue, setInputValue] = import_react4.default.useState("");
  const [options, setOptions] = import_react4.default.useState([]);
  const googleLoaded = import_react4.default.useRef(false);
  if (!googleLoaded.current) {
    const googleLoader = new import_js_api_loader.Loader({
      apiKey: props.googleApiConfig.apiKey,
      version: props.googleApiConfig.version,
      libraries: props.googleApiConfig.libraries,
      region: props.googleApiConfig.region
    });
    googleLoader.load().then(() => {
      googleLoaded.current = true;
    });
  }
  const fetch = import_react4.default.useMemo(() => (0, import_throttle.default)((request, callback) => {
    autocompleteService.insistence.getPlacePredictions({ input: request.input, types: ["address"] }, callback);
  }, 200), []);
  import_react4.default.useEffect(() => {
    let active = true;
    if (!autocompleteService.insistence && window.google) {
      autocompleteService.insistence = new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.insistence) {
      return void 0;
    }
    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return void 0;
    }
    fetch({ input: inputValue }, (results) => {
      if (active) {
        let newOptions = [];
        if (value) {
          newOptions = [value];
        }
        if (results) {
          newOptions = [...newOptions, ...results];
        }
        setOptions(newOptions);
      }
    });
    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);
  const setupResponse = (placeId) => {
    if (placeId && placeId.length > 0) {
      const gCoder = new google.maps.Geocoder();
      gCoder.geocode({ placeId }, (response) => {
        const location = response[0];
        let address = {
          formatted_address: location.formatted_address,
          lat: location.geometry.location.lat(),
          lng: location.geometry.location.lng()
        };
        for (const component of location.address_components) {
          const addressType = component.types[0];
          if (google_locality[addressType]) {
            address[addressType] = getProperty(component, google_locality[addressType]);
          }
        }
        props.onAddressSelects(address);
      });
    }
  };
  return /* @__PURE__ */ import_react4.default.createElement(import_Autocomplete2.default, {
    id: "sa-google-map-auto-complete",
    getOptionLabel: (option) => typeof option === "string" ? option : option.description,
    filterOptions: (x) => x,
    options,
    autoComplete: true,
    includeInputInList: true,
    filterSelectedOptions: true,
    value,
    onChange: (event, newValue) => {
      setOptions(newValue ? [newValue, ...options] : options);
      setValue(newValue);
      setupResponse(newValue == null ? void 0 : newValue.place_id);
    },
    onInputChange: (event, newInputValue) => {
      setInputValue(newInputValue);
    },
    renderInput: (params) => /* @__PURE__ */ import_react4.default.createElement(import_TextField2.default, __spreadValues(__spreadValues({}, params), props.textFiledProps)),
    renderOption: (params, option) => {
      const matches = option.structured_formatting.main_text_matched_substrings;
      const parts = (0, import_parse.default)(option.structured_formatting.main_text, matches.map((match) => [match.offset, match.offset + match.length]));
      return /* @__PURE__ */ import_react4.default.createElement(ACAddressCompleteLiElement_default, {
        parts,
        option,
        params
      });
    }
  });
};
var ACGoogleMapSearchField_default = ACGoogleMapSearchField;

// src/lib/AddressAutoComplete/ACAddress.tsx
var ACAddress = class extends import_react5.Component {
  constructor(props) {
    super(props);
    this.state = {
      untNumber: props.untNumber ? props.untNumber : "",
      addressLine: props.addressLine ? props.addressLine : "",
      addressLineTwo: props.addressLineTwo ? props.addressLineTwo : "",
      suburb: props.suburb ? props.suburb : "",
      city: props.city ? props.city : "",
      postCode: props.postCode ? props.postCode : ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onAddressChanged = this.onAddressChanged.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onAddressChanged(selectedAddress) {
    if (selectedAddress) {
      this.setState({
        postCode: selectedAddress.postal_code,
        city: selectedAddress.locality,
        addressLineTwo: selectedAddress.street_number + " " + selectedAddress.route,
        untNumber: selectedAddress.subpremise
      });
      if (this.props.onChange) {
        this.props.onChange(this.state);
      }
    }
  }
  render() {
    return /* @__PURE__ */ import_react5.default.createElement(import_Grid2.default, {
      container: true,
      spacing: 3
    }, /* @__PURE__ */ import_react5.default.createElement(import_Grid2.default, {
      item: true,
      md: 12
    }), /* @__PURE__ */ import_react5.default.createElement(import_Grid2.default, {
      item: true,
      md: 12,
      xs: 12
    }, /* @__PURE__ */ import_react5.default.createElement(ACGoogleMapSearchField_default, {
      onAddressSelects: this.onAddressChanged,
      googleApiConfig: this.props.googleApiConfig,
      textFiledProps: {
        fullWidth: true,
        helperText: "Search for address ... ",
        label: "Address",
        variant: "outlined",
        name: "AddressLine",
        required: true
      }
    })), /* @__PURE__ */ import_react5.default.createElement(import_Grid2.default, {
      item: true,
      md: 12,
      xs: 12
    }, /* @__PURE__ */ import_react5.default.createElement(import_TextField3.default, {
      fullWidth: true,
      helperText: "optional",
      label: "Address Line",
      name: "AddressLineTwo",
      onChange: this.handleChange,
      value: this.state.addressLineTwo,
      variant: "outlined"
    })), /* @__PURE__ */ import_react5.default.createElement(import_Grid2.default, {
      item: true,
      md: 4,
      xs: 12
    }, /* @__PURE__ */ import_react5.default.createElement(import_TextField3.default, {
      fullWidth: true,
      label: "Unit Number",
      name: "untNumber",
      onChange: this.handleChange,
      value: this.state.untNumber,
      variant: "outlined"
    })), /* @__PURE__ */ import_react5.default.createElement(import_Grid2.default, {
      item: true,
      md: 4,
      xs: 12
    }, /* @__PURE__ */ import_react5.default.createElement(import_TextField3.default, {
      fullWidth: true,
      label: "City",
      name: "city",
      onChange: this.handleChange,
      required: true,
      value: this.state.city,
      variant: "outlined"
    })), /* @__PURE__ */ import_react5.default.createElement(import_Grid2.default, {
      item: true,
      md: 4,
      xs: 12
    }, /* @__PURE__ */ import_react5.default.createElement(import_TextField3.default, {
      fullWidth: true,
      label: "Post Code",
      name: "postCode",
      onChange: this.handleChange,
      required: true,
      value: this.state.postCode,
      variant: "outlined"
    })));
  }
};
var ACAddress_default = ACAddress;

// src/lib/index.tsx
var lib_default = AutoCompleteWithApi_default;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACAddress,
  ACGoogleMapSearchField
});
//# sourceMappingURL=index.js.map