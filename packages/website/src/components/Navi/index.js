import React from "react";
import { Link } from "gatsby";
import Meta, {
  defaultTitlePrefix,
  getTitleFromHostname
} from "components/Meta";

class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: this.props.title };
  }

  componentDidMount() {
    this.setState({
      title: getTitleFromHostname(defaultTitlePrefix)
    });
  }

  render() {
    const { location, title } = this.props;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-primary">
        <Meta />
        <div className="container px-0">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{this.state.title}</h1>
          </Link>
          <button
            class="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link className="nav-link" to="/posts">
                  Blog
                  <i
                    class="fa fa-file-text d-md-none ml-2"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navi;
