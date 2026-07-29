/* @ds-bundle: {"format":4,"namespace":"SkyHighAccountantsDesignSystem_48a5c0","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"ImagePlaceholder","sourcePath":"components/cards/Cards.jsx"},{"name":"ProductCard","sourcePath":"components/cards/Cards.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/Cards.jsx"},{"name":"ResourceCard","sourcePath":"components/cards/Cards.jsx"},{"name":"StatCallout","sourcePath":"components/cards/Cards.jsx"},{"name":"Cards","sourcePath":"components/cards/Cards.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"SearchInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"HeroDark","sourcePath":"components/hero/Hero.jsx"},{"name":"CtaStrip","sourcePath":"components/hero/Hero.jsx"},{"name":"Hero","sourcePath":"components/hero/Hero.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"UtilityBar","sourcePath":"components/navigation/Navigation.jsx"},{"name":"PrimaryNav","sourcePath":"components/navigation/Navigation.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Navigation.jsx"},{"name":"SubNavStrip","sourcePath":"components/navigation/Navigation.jsx"},{"name":"Navigation","sourcePath":"components/navigation/Navigation.jsx"},{"name":"PillTabs","sourcePath":"components/tabs/PillTabs.jsx"},{"name":"Badge","sourcePath":"components/tags/Badge.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"a62138e1132e","components/cards/Cards.jsx":"839d2358e423","components/forms/TextInput.jsx":"c67685665f50","components/hero/Hero.jsx":"969a1a428528","components/navigation/Footer.jsx":"b382c949247d","components/navigation/Navigation.jsx":"8bd172855b8b","components/tabs/PillTabs.jsx":"c82f3f39dae6","components/tags/Badge.jsx":"b0742fdfbf91"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SkyHighAccountantsDesignSystem_48a5c0 = window.SkyHighAccountantsDesignSystem_48a5c0 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  onClick,
  style
}) {
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: 700,
    border: "none",
    cursor: disabled ? "default" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: "var(--radius-sm)",
    transition: "background .12s ease"
  };
  const sizes = {
    lg: {
      fontSize: 18,
      padding: "13px 28px",
      height: 48
    },
    md: {
      fontSize: 16,
      padding: "11px 24px",
      height: 44
    },
    sm: {
      fontSize: 14,
      padding: "8px 16px",
      height: 36
    }
  };
  const variants = {
    primary: {
      background: "var(--sky-blue)",
      color: "#fff"
    },
    "primary-active": {
      background: "var(--sky-blue-dark)",
      color: "#fff"
    },
    outline: {
      background: "transparent",
      color: "var(--ink)",
      border: "2px solid var(--sky-blue)"
    },
    "outline-on-dark": {
      background: "transparent",
      color: "var(--on-dark)",
      border: "1px solid var(--on-dark)"
    },
    ghost: {
      background: "none",
      color: "var(--sky-blue)",
      padding: 0,
      height: "auto",
      textDecoration: "none"
    }
  };
  if (disabled) return React.createElement("button", {
    disabled: true,
    style: {
      ...base,
      ...sizes[size],
      background: "var(--surface-soft)",
      color: "var(--ash)"
    }
  }, children);
  if (variant === "ghost") return React.createElement("button", {
    onClick,
    style: {
      ...base,
      ...variants.ghost,
      ...style
    }
  }, children, " \u2192");
  return React.createElement("button", {
    onClick,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Cards.jsx
try { (() => {
function HorizonTick() {
  return React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 24,
      width: 28,
      height: 3,
      background: "var(--sky-blue)"
    }
  });
}
function ImagePlaceholder({
  ratio = "16/9",
  label = "Image"
}) {
  return React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: "var(--surface-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--stone)",
      fontSize: 12,
      fontFamily: "var(--font-sans)"
    }
  }, label);
}
function ProductCard({
  image,
  title,
  description
}) {
  return React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--canvas)",
      border: "1px solid var(--hairline)",
      padding: 24,
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, React.createElement(HorizonTick), image || React.createElement(ImagePlaceholder, {
    ratio: "16/9"
  }), React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700,
      marginTop: 4
    }
  }, title), React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--body)"
    }
  }, description), React.createElement("div", {
    style: {
      color: "var(--sky-blue)",
      fontWeight: 700,
      fontSize: 14,
      marginTop: "auto"
    }
  }, "Learn more \u2192"));
}
function FeatureCard({
  icon = "\u25C6",
  title,
  description
}) {
  return React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--canvas)",
      border: "1px solid var(--hairline)",
      padding: 32,
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, React.createElement(HorizonTick), React.createElement("div", {
    style: {
      color: "var(--sky-blue)",
      fontSize: 22
    }
  }, icon), React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700
    }
  }, title), React.createElement("div", {
    style: {
      fontSize: 16,
      color: "var(--body)"
    }
  }, description));
}
function ResourceCard({
  badge,
  image,
  title,
  description
}) {
  return React.createElement("div", {
    style: {
      position: "relative",
      background: "var(--canvas)",
      border: "1px solid var(--hairline)",
      padding: 24,
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-sans)",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, React.createElement(HorizonTick), React.createElement("div", {
    style: {
      background: "var(--surface-soft)",
      color: "var(--body)",
      fontSize: 14,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".03em",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      alignSelf: "flex-start"
    }
  }, badge), image || React.createElement(ImagePlaceholder, {
    ratio: "3/2"
  }), React.createElement("div", {
    style: {
      fontSize: 17,
      fontWeight: 700
    }
  }, title), React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--body)"
    }
  }, description), React.createElement("div", {
    style: {
      color: "var(--sky-blue)",
      fontWeight: 700,
      fontSize: 14,
      marginTop: "auto"
    }
  }, "Read more \u2192"));
}
function StatCallout({
  stat,
  caption
}) {
  return React.createElement("div", {
    style: {
      background: "var(--canvas)",
      border: "1px solid var(--hairline)",
      padding: 32,
      borderRadius: "var(--radius-sm)",
      fontFamily: "var(--font-sans)"
    }
  }, React.createElement("div", {
    style: {
      fontSize: 36,
      fontWeight: 700,
      color: "var(--sky-blue)",
      lineHeight: 1.2
    }
  }, stat), React.createElement("div", {
    style: {
      fontSize: 16,
      color: "var(--body)",
      marginTop: 6
    }
  }, caption));
}
const Cards = {
  ProductCard,
  FeatureCard,
  ResourceCard,
  StatCallout,
  ImagePlaceholder
};
Object.assign(__ds_scope, { ImagePlaceholder, ProductCard, FeatureCard, ResourceCard, StatCallout, Cards });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Cards.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function TextInput({
  placeholder,
  value,
  onChange,
  focused = false,
  type = "text"
}) {
  const style = {
    fontFamily: "var(--font-sans)",
    fontSize: 16,
    padding: "12px 16px",
    height: 44,
    borderRadius: "var(--radius-sm)",
    border: focused ? "2px solid var(--sky-blue)" : "1px solid var(--hairline)",
    color: "var(--ink)",
    width: "100%",
    boxSizing: "border-box",
    outline: "none"
  };
  return React.createElement("input", {
    type,
    placeholder,
    value,
    onChange,
    style
  });
}
function SearchInput({
  placeholder = "Search"
}) {
  return React.createElement("div", {
    style: {
      position: "relative",
      width: "100%"
    }
  }, React.createElement("input", {
    placeholder,
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      padding: "10px 16px 10px 36px",
      height: 40,
      borderRadius: "var(--radius-sm)",
      border: "1px solid var(--hairline)",
      width: "100%",
      boxSizing: "border-box"
    }
  }), React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: 11,
      color: "var(--mute)",
      fontSize: 14
    }
  }, "\u{1F50D}"));
}
Object.assign(__ds_scope, { TextInput, SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/hero/Hero.jsx
try { (() => {
function HeroDark({
  eyebrow,
  title,
  subtitle,
  children
}) {
  return React.createElement("div", {
    style: {
      background: "var(--surface-dark)",
      color: "#fff",
      display: "flex",
      padding: "80px 48px",
      fontFamily: "var(--font-sans)",
      gap: 40,
      alignItems: "center"
    }
  }, React.createElement("div", {
    style: {
      flex: "0 0 40%",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, eyebrow && React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".04em",
      color: "var(--sky-blue-pale)"
    }
  }, eyebrow), React.createElement("div", {
    style: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1.2
    }
  }, title), React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 400,
      lineHeight: 1.5,
      color: "var(--on-dark-mute)"
    }
  }, subtitle), React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 8
    }
  }, children)), React.createElement("div", {
    style: {
      flex: 1,
      aspectRatio: "16/9",
      background: "var(--surface-elevated)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--stone)",
      fontSize: 13
    }
  }, "Hero image"));
}
function CtaStrip({
  title,
  children
}) {
  return React.createElement("div", {
    style: {
      background: "var(--surface-dark)",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "32px 48px",
      fontFamily: "var(--font-sans)"
    }
  }, React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700
    }
  }, title), React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, children));
}
const Hero = {
  HeroDark,
  CtaStrip
};
Object.assign(__ds_scope, { HeroDark, CtaStrip, Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hero/Hero.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer() {
  const cols = [["Services", ["Bookkeeping", "Tax Preparation", "Payroll", "Advisory"]], ["Industries", ["Healthcare", "Retail", "Real Estate", "Nonprofits"]], ["Resources", ["Guides", "Webinars", "Blog", "Calculators"]], ["Company", ["About", "Careers", "Contact", "Press"]]];
  return React.createElement("div", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--on-dark-mute)",
      padding: "64px 48px",
      fontFamily: "var(--font-sans)"
    }
  }, React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 32
    }
  }, cols.map(([h, links], i) => React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      fontSize: 16
    }
  }, h), links.map((l, j) => React.createElement("div", {
    key: j,
    style: {
      fontSize: 15
    }
  }, l))))), React.createElement("div", {
    style: {
      borderTop: "1px solid var(--hairline-strong)",
      marginTop: 48,
      paddingTop: 24,
      fontSize: 10,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".04em",
      color: "var(--mute)"
    }
  }, "© 2026 SkyHigh Accountants. All rights reserved."));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navigation.jsx
try { (() => {
function UtilityBar() {
  return React.createElement("div", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--on-dark-mute)",
      height: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 16,
      padding: "0 24px",
      fontFamily: "var(--font-sans)",
      fontSize: 12
    }
  }, React.createElement("span", null, "Client Login"), React.createElement("span", null, "Contact"));
}
function PrimaryNav() {
  return React.createElement("div", {
    style: {
      background: "var(--surface-dark)",
      color: "#fff",
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      fontFamily: "var(--font-sans)"
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18
    }
  }, "SkyHigh Accountants"), React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      fontSize: 16,
      fontWeight: 700
    }
  }, ["Services", "Industries", "Resources", "About"].map((t, i) => React.createElement("span", {
    key: i
  }, t))), React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      alignItems: "center"
    }
  }, React.createElement("span", {
    style: {
      fontSize: 14
    }
  }, "Login"), React.createElement("button", {
    style: {
      background: "var(--sky-blue)",
      color: "#fff",
      border: "none",
      padding: "10px 18px",
      borderRadius: "var(--radius-sm)",
      fontWeight: 700,
      fontSize: 14
    }
  }, "Get Started")));
}
function Breadcrumb({
  items = []
}) {
  return React.createElement("div", {
    style: {
      background: "var(--surface-soft)",
      height: 48,
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "0 24px",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".02em",
      color: "var(--body)"
    }
  }, items.map((t, i) => React.createElement(React.Fragment, {
    key: i
  }, i > 0 && React.createElement("span", {
    style: {
      color: "var(--mute)"
    }
  }, "›"), React.createElement("span", null, t))));
}
function SubNavStrip({
  items = []
}) {
  return React.createElement("div", {
    style: {
      background: "var(--surface-soft)",
      height: 56,
      display: "flex",
      alignItems: "center",
      gap: 24,
      padding: "0 24px",
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      fontWeight: 700,
      color: "var(--ink)"
    }
  }, items.map((t, i) => React.createElement("span", {
    key: i
  }, t)));
}
const Navigation = {
  UtilityBar,
  PrimaryNav,
  Breadcrumb,
  SubNavStrip
};
Object.assign(__ds_scope, { UtilityBar, PrimaryNav, Breadcrumb, SubNavStrip, Navigation });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navigation.jsx", error: String((e && e.message) || e) }); }

// components/tabs/PillTabs.jsx
try { (() => {
function PillTabs({
  tabs,
  active,
  onChange
}) {
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 4
    }
  }, tabs.map((t, i) => React.createElement("button", {
    key: i,
    onClick: () => onChange && onChange(t),
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 700,
      padding: "10px 18px",
      borderRadius: "var(--radius-sm)",
      border: "none",
      cursor: "pointer",
      background: t === active ? "var(--ink)" : "transparent",
      color: t === active ? "#fff" : "var(--ink)"
    }
  }, t)));
}
Object.assign(__ds_scope, { PillTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tabs/PillTabs.jsx", error: String((e && e.message) || e) }); }

// components/tags/Badge.jsx
try { (() => {
function Badge({
  children
}) {
  return React.createElement("span", {
    style: {
      background: "var(--surface-soft)",
      color: "var(--body)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: ".03em",
      padding: "4px 10px",
      borderRadius: "var(--radius-sm)",
      display: "inline-block"
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tags/Badge.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ImagePlaceholder = __ds_scope.ImagePlaceholder;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.ResourceCard = __ds_scope.ResourceCard;

__ds_ns.StatCallout = __ds_scope.StatCallout;

__ds_ns.Cards = __ds_scope.Cards;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.HeroDark = __ds_scope.HeroDark;

__ds_ns.CtaStrip = __ds_scope.CtaStrip;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.UtilityBar = __ds_scope.UtilityBar;

__ds_ns.PrimaryNav = __ds_scope.PrimaryNav;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SubNavStrip = __ds_scope.SubNavStrip;

__ds_ns.Navigation = __ds_scope.Navigation;

__ds_ns.PillTabs = __ds_scope.PillTabs;

__ds_ns.Badge = __ds_scope.Badge;

})();
