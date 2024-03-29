import { renderWithTheme } from 'utils/tests/helper';

import { FormLink, FormWrapper } from '.';

describe('<Form />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <FormWrapper>
        <FormLink>
          My Nice <a href="#">link</a>
        </FormLink>
      </FormWrapper>
    );

    expect(container.parentElement).toMatchInlineSnapshot(`
      .c0 .sc-jSgupP {
        margin: 0.8rem 0;
      }

      .c0 .sc-gKsewC {
        margin: 3.2rem auto 1.6rem;
      }

      .c1 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .c1 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
        margin-left: 0.8rem;
      }

      .c1 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <body>
        <div>
          <div
            class="c0"
          >
            <div
              class="c1"
            >
              My Nice 
              <a
                href="#"
              >
                link
              </a>
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
