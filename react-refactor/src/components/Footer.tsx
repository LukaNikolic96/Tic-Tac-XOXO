import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        Original project by
        <a href="https://twitter.com/megfdev" target="_blank">
          @megfdev
        </a>{" "}
        and
        <a href="https://twitter.com/Ivan00sto" target="_blank">
             @Ivan00Sto
        </a>
      </p>

      <p>
        Refactored by
        <a
          href="https://www.linkedin.com/in/luka-nikolic-532358226/"
          target="_blank"
          style={{ color: "var(--turquoise)" }}
        >
          Luka Nikolic
        </a>
      </p>
    </footer>
  );
}
